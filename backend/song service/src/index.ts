import express from "express";
import dotenv from "dotenv";
import songRoutes from "./route.js";
import redis from "redis";
import cors from "cors";

dotenv.config();

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
const port = 5000;
const app = express();

app.use(cors());

app.use("/api/v1", songRoutes);

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
