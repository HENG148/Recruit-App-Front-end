import mongoose, { Document, Model, Schema } from "mongoose";

interface IUser extends Document {
  name: string;
  email: string;
  password?: string;
  id: string;
}

const UserSchema: Schema<IUser> = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: false,
  }
})

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
export default User;

// import connectionToDatabae from "@/lib/dbConnect"
// import { NextRequest, NextResponse } from "next/server";
// import User from "@/models/User";

// export async function POST(request: NextRequest): Promise<Response> {
//   try {
//     await connectionToDatabae();
//     const { name, email } = await request.json();
//     const newUser = new User({name, email})
//     await newUser.save()
//     return NextResponse.json(newUser, {status: 201})
//   } catch (error) {
//     console.error(error)

//     return NextResponse.json(
//       { error: "Failed to create user" },
//       { status: 500 }
//     )
//   }
// }





// import connectToDatabase from "@/lib/dbConnect";
// import User from "@/models/User";
// import { NextResponse, NextRequest } from "next/server";

// interface UserPayload {
//   name: string;
//   email: string;
// }

// export async function POST(request: NextRequest) {
//   try {
//     await connectToDatabase()
//     const body: unknown = await request.json();

//     if (
//       typeof body !== "object" ||
//       body === null ||
//       !("name" in body) ||
//       !("email" in body)
//     ) {
//       return NextResponse.json({ error: "Invalid request body" }, { status: 401 })
//     }

//     const { name, email } = body as UserPayload;
//     const newUser = new User({ name, email });

//     await newUser.save();
//     return NextResponse.json(newUser, { status: 201})
//   } catch (err) {
//     console.log(err)
//     return NextResponse.json({error: "Invalid server error"}, { status: 500})
//   }
// }