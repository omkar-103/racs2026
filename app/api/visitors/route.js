// app/api/visitors/route.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

export async function GET(request) {
  let client;
  
  try {
    client = await MongoClient.connect(uri);
    const db = client.db('racs2026_conference');
    const visitorsCollection = db.collection('visitors');

    // Get total visitor count
    const totalVisitors = await visitorsCollection.countDocuments();

    // Get country-wise breakdown (top 10)
    const countryStats = await visitorsCollection.aggregate([
      {
        $group: {
          _id: '$country',
          count: { $sum: 1 },
          countryCode: { $first: '$countryCode' }
        }
      },
      { $sort: { count: -1 } },
      { $limit: 10 }
    ]).toArray();

    return Response.json({
      success: true,
      totalVisitors,
      countryStats: countryStats.map(stat => ({
        country: stat._id,
        countryCode: stat.countryCode,
        count: stat.count
      }))
    });
  } catch (error) {
    console.error('Error fetching visitor stats:', error);
    return Response.json({
      success: false,
      message: 'Error fetching visitor statistics'
    }, { status: 500 });
  } finally {
    if (client) {
      await client.close();
    }
  }
}

export async function POST(request) {
  let client;
  
  try {
    const body = await request.json();
    const { ip, userAgent } = body;

    // Get geolocation data from IP
    let country = 'Unknown';
    let countryCode = 'XX';
    let city = 'Unknown';

    try {
      // Using ip-api.com for geolocation (free, no API key needed)
      const geoResponse = await fetch(`http://ip-api.com/json/${ip}?fields=status,country,countryCode,city`);
      const geoData = await geoResponse.json();
      
      if (geoData.status === 'success') {
        country = geoData.country;
        countryCode = geoData.countryCode;
        city = geoData.city;
      }
    } catch (geoError) {
      console.error('Geolocation error:', geoError);
    }

    client = await MongoClient.connect(uri);
    const db = client.db('racs2026_conference');
    const visitorsCollection = db.collection('visitors');

    // Check if this IP visited in the last 24 hours (to avoid duplicate counting)
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const existingVisit = await visitorsCollection.findOne({
      ip,
      timestamp: { $gte: oneDayAgo }
    });

    if (!existingVisit) {
      // Record new visit
      await visitorsCollection.insertOne({
        ip,
        userAgent,
        country,
        countryCode,
        city,
        timestamp: new Date()
      });
    }

    // Get updated count
    const totalVisitors = await visitorsCollection.countDocuments();

    return Response.json({
      success: true,
      totalVisitors,
      visitor: {
        country,
        countryCode,
        city
      }
    });
  } catch (error) {
    console.error('Error recording visit:', error);
    return Response.json({
      success: false,
      message: 'Error recording visit'
    }, { status: 500 });
  } finally {
    if (client) {
      await client.close();
    }
  }
}