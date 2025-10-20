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
    
    // Get IP from request headers (better for mobile detection)
    const forwarded = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const cfConnectingIp = request.headers.get('cf-connecting-ip');
    
    const ip = forwarded?.split(',')[0]?.trim() || 
               realIp?.trim() || 
               cfConnectingIp?.trim() || 
               body.ip || 
               'unknown';

    const userAgent = body.userAgent || request.headers.get('user-agent') || 'unknown';
    
    // Create a unique fingerprint combining IP and User Agent
    const fingerprint = `${ip}_${userAgent.substring(0, 50)}`;

    // Get geolocation data from IP
    let country = 'Unknown';
    let countryCode = 'XX';
    let city = 'Unknown';
    let isp = 'Unknown';

    try {
      // Using ip-api.com for geolocation (free, no API key needed)
      const geoResponse = await fetch(`http://ip-api.com/json/${ip}?fields=status,country,countryCode,city,isp,mobile`, {
        headers: {
          'User-Agent': 'RACS2026-Conference-Tracker'
        }
      });
      const geoData = await geoResponse.json();
      
      console.log('Geolocation Response:', geoData); // Debug log
      
      if (geoData.status === 'success') {
        country = geoData.country || 'Unknown';
        countryCode = geoData.countryCode || 'XX';
        city = geoData.city || 'Unknown';
        isp = geoData.isp || 'Unknown';
      } else {
        console.log('Geolocation failed for IP:', ip);
      }
    } catch (geoError) {
      console.error('Geolocation error:', geoError);
    }

    client = await MongoClient.connect(uri);
    const db = client.db('racs2026_conference');
    const visitorsCollection = db.collection('visitors');

    // Check if this fingerprint visited in the last 30 minutes (to avoid spam but count unique devices)
    const thirtyMinutesAgo = new Date(Date.now() - 30 * 60 * 1000);
    const existingVisit = await visitorsCollection.findOne({
      fingerprint,
      timestamp: { $gte: thirtyMinutesAgo }
    });

    if (!existingVisit) {
      // Record new visit
      await visitorsCollection.insertOne({
        ip,
        fingerprint,
        userAgent,
        country,
        countryCode,
        city,
        isp,
        timestamp: new Date()
      });
      
      console.log('New visit recorded:', { ip, country, city, userAgent: userAgent.substring(0, 50) });
    } else {
      console.log('Duplicate visit ignored:', { ip, fingerprint });
    }

    // Get updated count
    const totalVisitors = await visitorsCollection.countDocuments();

    return Response.json({
      success: true,
      totalVisitors,
      visitor: {
        country,
        countryCode,
        city,
        ip: ip.substring(0, 10) + '***' // Partial IP for privacy
      }
    });
  } catch (error) {
    console.error('Error recording visit:', error);
    return Response.json({
      success: false,
      message: 'Error recording visit',
      error: error.message
    }, { status: 500 });
  } finally {
    if (client) {
      await client.close();
    }
  }
}