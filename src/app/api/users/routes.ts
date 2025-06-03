import connectionToDatabae from "@/lib/dbConnect";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function PORT(request: Request) {
  try {
    await connectionToDatabae();
    const { name, email } = await request.json();
    const newUser = new User({ name, email })
    await newUser.save();
    return NextResponse.json(newUser, {status: 201})
  } catch(err) {
    console.log(err)
  }
}
