import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import User, { IUser } from "./model.js";

export interface authenticateRequest extends Request {
  user?: IUser | null;
}
export const isAuth = async (
  req: authenticateRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = req.headers.token as string;

    if (!token) {
      res
        .status(404)
        .json({ message: "Please login first to access this.(for token)" });
      return;
    }

    const decodedValue = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as JwtPayload;

    if (!decodedValue || !decodedValue._id) {
      res.status(403).json({
        message: "Invalid token.",
      });
      return;
    }

    const userId = decodedValue._id;
    const user = await User.findById(userId).select("-password");

    if (!user) {
      res.status(403).json({
        message: "User not found.",
      });
      return;
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(403).json({
      message: "Please login first to access this.",
    });
  }
};
