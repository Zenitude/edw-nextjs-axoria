import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export async function connectToDb() {
  if (mongoose.connection && mongoose.connection.readyState === 1) {
    console.log("Using existing connection :", mongoose.connection.name);
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log(`Connected to database : ${mongoose.connection.name}`)
    return;
  } catch(error) {
    console.log("Error connecting to database : ", (error as Error).message);
  }
}