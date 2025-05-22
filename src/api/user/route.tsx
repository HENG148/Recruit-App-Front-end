import connectToDatabase from "@/lib/mongoose";
import User from "@/models/User";
import { NextResponse, NextRequest } from "next/server";

interface UserPayload {
  name: string;
  email: string;
}

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase()
    const body: unknown = await request.json();

    if (
      typeof body !== "object" ||
      body === null ||
      !("name" in body) ||
      !("email" in body)
    ) {
      return NextResponse.json({ error: "Invalid request body" }, { status: 401 })
    }

    const { name, email } = body as UserPayload;
    const newUser = new User({ name, email });

    await newUser.save();
    return NextResponse.json(newUser, { status: 201})
    // const { name, email } = await request.json();
    // const newUser = new User({ name, email })
    // await newUser.save()
    // return NextResponse.json(newUser, {status: 201})
  } catch (err) {
    console.log(err)
    return NextResponse.json({error: "Invalid server error"}, { status: 500})
  }
}