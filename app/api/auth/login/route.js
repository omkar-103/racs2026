import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs';

const uri = process.env.MONGODB_URI;

export async function POST(request) {
  let client;
  
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return Response.json({ success: false, message: 'Email and password required' }, { status: 400 });
    }

    client = await MongoClient.connect(uri);
    const db = client.db('racs2026_conference');
    const usersCollection = db.collection('users');

    // Find user
    const user = await usersCollection.findOne({ email });
    if (!user) {
      return Response.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
    }

    // Check password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return Response.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
    }

    // Return user without password
    const userResponse = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      createdAt: user.createdAt
    };

    return Response.json({ success: true, user: userResponse }, { status: 200 });
  } catch (error) {
    console.error('Login error:', error);
    return Response.json({ success: false, message: 'Server error' }, { status: 500 });
  } finally {
    if (client) {
      await client.close();
    }
  }
}