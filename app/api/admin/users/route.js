import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

export async function GET(request) {
  let client;
  
  try {
    client = await MongoClient.connect(uri);
    const db = client.db('racs2026_conference');
    const usersCollection = db.collection('users');

    // Get all users (without passwords)
    const users = await usersCollection.find({}, { 
      projection: { password: 0 } 
    }).sort({ createdAt: -1 }).toArray();

    return Response.json({ success: true, users }, { status: 200 });
  } catch (error) {
    console.error('Error fetching users:', error);
    return Response.json({ success: false, message: 'Server error' }, { status: 500 });
  } finally {
    if (client) {
      await client.close();
    }
  }
}