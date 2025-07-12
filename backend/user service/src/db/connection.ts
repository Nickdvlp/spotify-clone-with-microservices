import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECT as string, {
      dbName: "Spotify_clone",
    });
    console.log("✅ Connected to MongoDB");
  } catch (error: any) {
    console.error("❌ Error connecting to MongoDB:", error.message);
  }
};
