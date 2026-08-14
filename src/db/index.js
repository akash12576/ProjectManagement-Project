import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB..."); // Debug line
    const connectionInstance = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000, // 5 second timeout limit
    });
    console.log(`✅ MongoDB Connected! DB Host: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
};

export default connectDB;