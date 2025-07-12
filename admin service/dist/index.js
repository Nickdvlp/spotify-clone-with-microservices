import express from "express";
import dotenv from "dotenv";
import { sql } from "./db/connection.js";
import adminRoutes from "./route.js";
import cloudinary from "cloudinary";
import redis from "redis";
import cors from "cors";
const app = express();
dotenv.config();
app.use(cors());
export const redisClient = redis.createClient({
    password: process.env.REDIS_PASS,
    socket: {
        host: "redis-15847.c9.us-east-1-4.ec2.redns.redis-cloud.com",
        port: 15847,
    },
});
redisClient
    .connect()
    .then(() => console.log("connected to redis"))
    .catch((err) => console.log(err));
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
});
const port = process.env.PORT;
const initDB = async () => {
    try {
        await sql `
CREATE TABLE IF NOT EXISTS albums(
   id SERIAL PRIMARY KEY,
   title VARCHAR(255) NOT NULL ,
   description VARCHAR(255) NOT NULL,
   thumbnail VARCHAR(255) NOT NULL,
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`;
        await sql `
CREATE TABLE IF NOT EXISTS songs(
   id SERIAL PRIMARY KEY,
   title VARCHAR(255) NOT NULL ,
   description VARCHAR(255) NOT NULL,
   thumbnail VARCHAR(255),
   audio VARCHAR(255) NOT NULL,
   album_id INTEGER REFERENCES albums(id) ON DELETE SET NULL,       
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`;
        console.log("database intialized successfully.");
    }
    catch (error) {
        console.log("Error init db", error);
    }
};
app.use("/api/v1", adminRoutes);
initDB().then(() => {
    app.listen(port, () => {
        console.log(`server is running of admin service on ${port}`);
    });
});
