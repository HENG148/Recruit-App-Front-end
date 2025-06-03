import mongoose from "mongoose";

const connectionToDatabae = async () => {
  try {
    await mongoose.connect(process.env.MONGOURL as string);
    console.log("Connect to db")
  } catch (err) {

  }
}

export default connectionToDatabae;

// import mongoose from "mongoose";
// import dotenv from "dotenv"

// dotenv.config()

// const MONGODB_URI = process.env.MONGOURL;

// if (!MONGODB_URI) {
//   throw new Error ("please define mongo enviroment variable")
// }

// async function connectToDatabase() {
//   if (mongoose.connection.readyState === 1) {
//     return mongoose;
//   }
//   const opts = {
//     bufferCommands: false,
//   }
//   await mongoose.connect(MONGODB_URI!, opts)
//   return mongoose;
// }

// export default connectToDatabase;


// // import mongoose from "mongoose";

// // const connectionToDatabae = async (): Promise<void> => {
// //   try {
// //     const mongoUrl = process.env.MONGOURL;
    
// //     if (!mongoUrl) {
// //       throw new Error("MONGOURL is not defined in enviroment variables");
// //     }

// //     await mongoose.connect(mongoUrl)
// //     console.log("Connected to MongoDB")
// //   } catch (err) {
// //     console.error("Error", err)
// //   }
// // }
// // export default connectionToDatabae;