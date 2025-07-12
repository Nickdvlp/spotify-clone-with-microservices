import { CACHE_EXPIRY } from "./constant.js";
import { sql } from "./db/connection.js";
import { redisClient } from "./index.js";
import { TryCatch } from "./trycatch.js";

export const getAllAlbums = TryCatch(async (req, res) => {
  let albums;

  if (redisClient.isReady) {
    albums = await redisClient.get("albums");
  }
  if (albums) {
    console.log("cache hit");
    res.json(JSON.parse(albums));
  } else {
    console.log("cache miss");

    albums = await sql`SELECT * FROM albums`;

    if (redisClient.isReady) {
      // TODO: change stringify if doesn't work
      await redisClient.set("albums", JSON.stringify(albums), {
        EX: CACHE_EXPIRY,
      });
    }

    res.json(albums);
    return;
  }
});

export const getAllSongs = TryCatch(async (req, res) => {
  let songs;

  if (redisClient.isReady) {
    songs = await redisClient.get("songs");
  }
  if (songs) {
    console.log("cache hit");
    res.json(JSON.parse(songs));
    console.log(songs);
    return;
  } else {
    console.log("cache miss");
    songs = await sql`SELECT * FROM songs`;

    if (redisClient.isReady) {
      // TODO: change stringify if doesn't work
      await redisClient.set("songs", JSON.stringify(songs), {
        EX: CACHE_EXPIRY,
      });
    }
    res.json(songs);
    console.log(songs);
    return;
  }
});

export const getAllSongsofAlbum = TryCatch(async (req, res) => {
  const { id } = req.params;

  let album, songs;

  album = await sql`SELECT * FROM albums WHERE id=${id}`;
  if (album.length === 0) {
    res.status(404).json({
      message: "No album with this id.",
    });
  }

  songs = await sql`SELECT * FROM songs WHERE album_id = ${id}`;

  const response = { songs, album: album[0] };

  res.json(response);
});

export const getSingleSong = TryCatch(async (req, res) => {
  const song = await sql`SELECT * FROM songs WHERE id = ${req.params.id}`;

  console.log(song);
  res.json(song[0]);
});
