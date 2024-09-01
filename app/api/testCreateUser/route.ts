// app/api/testCreateUser/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { createUser } from '@/lib/actions/user.actions'; // Adjust the path if needed
import { CreateUserParams } from '@/types'; // Ensure this path is correct

export async function GET(req: NextRequest) {
  // Define a mock user object for testing
  const testUser: CreateUserParams = {
    clerkId: 'testClerkId123', // Ensure this is unique for each test run
    email: 'testuser@example.com',
    username: 'testuser',
    firstName: 'Test',
    lastName: 'User',
    photo: 'https://example.com/photo.jpg',
  };

  try {
    console.log('Starting test for createUser...');

    // Call the createUser function with the test data
    const result = await createUser(testUser);

    // Check if the user was created successfully
    if (!result) {
      return NextResponse.json({ message: 'User creation failed' }, { status: 500 });
    }

    // Return a success response
    return NextResponse.json({ message: 'User created successfully', user: result }, { status: 200 });
  } catch (error) {
    console.error('Error during test:', error);
    return NextResponse.json({ message: 'An error occurred', error: (error as Error).message }, { status: 500 });
  }
}
