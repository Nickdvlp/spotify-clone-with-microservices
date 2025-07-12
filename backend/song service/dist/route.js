import express from "express";
import { getAllAlbums, getAllSongs, getAllSongsofAlbum, getSingleSong, } from "./controller.js";
const router = express.Router();
router.get("/album/all", getAllAlbums);
router.get("/songs/all", getAllSongs);
router.get("/album/:id/songs", getAllSongsofAlbum);
router.get("/song/:id", getSingleSong);
export default router;
