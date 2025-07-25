import mongoose from "mongoose";
export const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECT, {
            dbName: "Spotify_clone",
        });
        console.log("✅ Connected to MongoDB");
    }
    catch (error) {
        console.error("❌ Error connecting to MongoDB:", error.message);
    }
};
