import express from "express";
import dotenv from "dotenv";
import { connectToDB } from "./db/connection.js";
import userRoutes from "./route.js";
import cors from "cors";

dotenv.config();
const port = 5000;
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1", userRoutes);

app.listen(port, () => {
  console.log(`server is running of user service on ${port}`);
  connectToDB();
});
