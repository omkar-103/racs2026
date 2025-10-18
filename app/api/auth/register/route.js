import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs';

const uri = process.env.MONGODB_URI;

export async function POST(request) {
  let client;
  
  try {
    const body = await request.json();
    const { firstName, lastName, email, password } = body;

    if (!firstName || !lastName || !email || !password) {
      return Response.json({ success: false, message: 'All fields required' }, { status: 400 });
    }

    client = await MongoClient.connect(uri);
    const db = client.db('racs2026_conference');
    const usersCollection = db.collection('users');

    // Check if user exists
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return Response.json({ success: false, message: 'User already exists' }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = {
      firstName,
      lastName,
      email,
      password: hashedPassword,
      createdAt: new Date()
    };

    await usersCollection.insertOne(newUser);

    // Return user without password
    const userResponse = {
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      createdAt: newUser.createdAt
    };

    return Response.json({ success: true, user: userResponse }, { status: 201 });
  } catch (error) {
    console.error('Registration error:', error);
    return Response.json({ success: false, message: 'Server error' }, { status: 500 });
  } finally {
    if (client) {
      await client.close();
    }
  }
}