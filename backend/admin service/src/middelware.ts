import axios from "axios";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import multer from "multer";
dotenv.config();

interface IUser {
  name: string;
  email: string;
  password: string;
  role: string;
  playlist: string[];
}
interface authenticatedRequest extends Request {
  user?: IUser | null;
}
export const isAuth = async (
  req: authenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization;
    console.log(token);

    if (!token) {
      res.status(400).json({ message: "Unauthorized!" });
      return;
    }

    const { data } = await axios.get(
      `${process.env.USER_URL}/api/v1/user/me` as string,
      {
        headers: {
          token,
        },
      }
    );
    req.user = data;
    next();
  } catch (error) {
    res.status(400).json({
      message: "Unauthorized!",
    });
  }
};

// multer setup
const storage = multer.memoryStorage();

const uploadFile = multer({ storage }).single("file");

export default uploadFile;
