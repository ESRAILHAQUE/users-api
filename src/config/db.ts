import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;

    if (!mongoURI) {
      throw new Error("MONGO_URI is not defined in .env file");
    }

    await mongoose.connect(mongoURI);
    console.log("✅ MongoDB is successfully connected");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    process.exit(1); // Add this so your app exits if DB fails to connect
  }
};

export default connectDB;
