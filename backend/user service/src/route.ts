import express from "express";
import { addToPlaylist, login, myProfile, register } from "./controller.js";
import { isAuth } from "./middleware.js";

const router = express.Router();

router.post("/user/register", register);
router.post("/user/login", login);
router.get("/user/me", isAuth, myProfile);
router.post("/song/:id", isAuth, addToPlaylist);

export default router;
