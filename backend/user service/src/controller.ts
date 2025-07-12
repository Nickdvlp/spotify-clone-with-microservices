import { authenticateRequest } from "./middleware.js";
import User from "./model.js";
import { TryCatch } from "./trycatch.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = TryCatch(async (req, res) => {
  const { name, email, password } = req.body;
  let user = await User.findOne({ email });

  if (user) {
    res.status(400).json({
      message: "User Already exists.",
    });
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET as string, {
    expiresIn: "7d",
  });

  res.status(201).json({
    message: "User created.",
    user,
    token,
  });
});

export const login = TryCatch(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    res.status(400).json({ message: "User does not exists" });
    return;
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    res.status(400).json({ message: "Invalid Password." });
    return;
  }

  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET as string, {
    expiresIn: "7d",
  });

  res.status(200).json({
    message: "User logged in successfully.",
    user,
    token,
  });
});

export const myProfile = TryCatch(async (req: authenticateRequest, res) => {
  const user = req.user;
  res.json(user);
});

export const addToPlaylist = TryCatch(async (req: authenticateRequest, res) => {
  const userId = req.user?._id;

  const user = await User.findById(userId);

  if (!user) {
    res.status(404).json({ message: "User not found with this id!" });
    return;
  }

  if (user?.playlist.includes(req.params.id)) {
    const index = user.playlist.indexOf(req.params.id);
    user.playlist.splice(index, 1);
    await user.save();
    res.status(200).json({ message: "Song removed from the playlist" });
    return;
  }
  user.playlist.push(req.params.id);
  await user.save();
  res.status(200).json({ message: "Song added successfully." });
});
