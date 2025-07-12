import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserData } from "../components/context/UserContext";
import { useSongData } from "../components/context/SongContext";
import axios from "axios";
import toast from "react-hot-toast";

const server = "http://localhost:7000";
const Admin = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [album, setAlbum] = useState<string>("");
  const [albumbtnLoading, setAlbumBtnLoading] = useState<boolean>(false);
  const [songbtnLoading, setSongBtnLoading] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);

  const navigate = useNavigate();

  const { user } = useUserData();
  const { albums, songs, fetchSongs, fetchAlbums } = useSongData();

  const fileChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const addAlbumHandler = async (e: FormEvent) => {
    e.preventDefault();

    if (!file) return;
    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("file", file);

    setAlbumBtnLoading(true);
    try {
      const { data } = await axios.post(
        `${server}/api/v1/album/new`,
        formData,
        {
          headers: { token: localStorage.getItem("token") },
        }
      );
      toast.success(data.message);
      fetchAlbums();
      setAlbumBtnLoading(false);
      setTitle("");
      setDescription("");
      setFile(null);
    } catch (error: any) {
      toast.error(error.response?.data?.message);
      console.log(error);
      setAlbumBtnLoading(false);
    }
  };

  const addSongHandler = async (e: FormEvent) => {
    e.preventDefault();

    if (!file) return;
    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("file", file);
    formData.append("album", album);

    setSongBtnLoading(true);
    try {
      const { data } = await axios.post(`${server}/api/v1/song/new`, formData, {
        headers: { token: localStorage.getItem("token") },
      });
      toast.success(data.message);
      fetchSongs();
      setSongBtnLoading(false);
      setTitle("");
      setDescription("");
      setAlbum("");
      setFile(null);
    } catch (error: any) {
      toast.error(error.response?.data?.message);
      console.log(error);
      setSongBtnLoading(false);
    }
  };

  const addThumbnailHandler = async (id: string) => {
    if (!file) return;
    const formData = new FormData();

    formData.append("file", file);

    try {
      const { data } = await axios.post(
        `${server}/api/v1/song/${id}`,
        formData,
        {
          headers: { token: localStorage.getItem("token") },
        }
      );
      toast.success(data.message);
      fetchSongs();
      setFile(null);
    } catch (error: any) {
      toast.error(error.response?.data?.message);
      console.log(error);
    }
  };

  const deleteAlbum = async (id: string) => {
    if (confirm("do you want to delete this album")) {
      try {
        const { data } = await axios.delete(`${server}/api/v1/album/${id}`, {
          headers: {
            token: localStorage.getItem("token"),
          },
        });
        toast.success(data.message);
        fetchSongs();
        fetchAlbums();
      } catch (error: any) {
        toast.error(error?.response?.data?.message);
      }
    }
  };

  const deleteSong = async (id: string) => {
    if (confirm("do you want to delete this album")) {
      try {
        const { data } = await axios.delete(`${server}/api/v1/song/${id}`, {
          headers: {
            token: localStorage.getItem("token"),
          },
        });
        toast.success(data.message);
        fetchSongs();
        fetchAlbums();
      } catch (error: any) {
        toast.error(error?.response?.data?.message);
      }
    }
  };

  useEffect(() => {
    if (user && user.role !== "admin") {
      navigate("/");
    }
  }, [user, navigate]);
  return (
    <div className="text-white min-h-screen bg-[#212121] p-8">
      <Link
        to={"/"}
        className="bg-green-500 text-white font-bold py-2 px-4 rounded-full"
      >
        Go to home page
      </Link>
      <h2 className="text-2xl font-bold mb-6 mt-6">Add Album</h2>
      <form
        className="bg-[#181818] p-6 rounded-lg shadow-lg flex flex-col items-center justify-center gap-4"
        onSubmit={addAlbumHandler}
      >
        <input
          type="text"
          placeholder="title"
          className="auth-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="description"
          className="auth-input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="file"
          placeholder="Choose Cover of album"
          className="auth-input"
          onChange={fileChangeHandler}
          accept="/image/*"
          required
        />
        <button
          className="auth-btn"
          style={{ width: "100px" }}
          disabled={albumbtnLoading}
        >
          {albumbtnLoading ? "Please wait..." : "Add"}
        </button>
      </form>

      <h2 className="text-2xl font-bold mb-6 mt-6">Add Song</h2>
      <form
        className="bg-[#181818] p-6 rounded-lg shadow-lg flex flex-col items-center justify-center gap-4"
        onSubmit={addSongHandler}
      >
        <input
          type="text"
          placeholder="title"
          className="auth-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="description"
          className="auth-input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <select
          className="auth-input"
          value={album}
          onChange={(e) => setAlbum(e.target.value)}
          required
        >
          <option value="">Choose Album</option>
          {albums.map((album, i) => (
            <option value={album.id} key={i}>
              {album.title}
            </option>
          ))}
        </select>
        <input
          type="file"
          placeholder="Choose audio of song"
          className="auth-input"
          onChange={fileChangeHandler}
          accept="/audio/*"
          required
        />
        <button
          className="auth-btn"
          style={{ width: "100px" }}
          disabled={songbtnLoading}
        >
          {songbtnLoading ? "Please wait..." : "Add"}
        </button>
      </form>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Added Albums</h3>
        <div className="flex justify-center md:justify-start gap-2 items-center flex-wrap">
          {albums?.map((album, i) => (
            <div className="bg-[#181818] p-4 rounded-lg shadow-lg" key={i}>
              <img
                src={album.thumbnail}
                className="mr-1 w-52 h-52"
                alt={album.title}
              />
              <h4 className="text-lg font-bold">
                {album.title.slice(0, 20)}...
              </h4>
              <h4 className="text-lg font-bold">
                {album.description.slice(0, 20)}...
              </h4>
              <button
                className="px-3 py-1 bg-red-500 text-white rounded-lg"
                onClick={() => deleteAlbum(album.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Added Songs</h3>
        <div className="flex justify-center md:justify-start gap-2 items-center flex-wrap">
          {songs?.map((song, i) => (
            <div className="bg-[#181818] p-4 rounded-lg shadow-lg" key={i}>
              {song.thumbnail ? (
                <img
                  src={song.thumbnail}
                  className="mr-1 w-52 h-52"
                  alt={song.title}
                />
              ) : (
                <div className="flex flex-col items-center justify-center gap-2">
                  <input type="file" onChange={fileChangeHandler} />
                  <button
                    className="auth-btn"
                    style={{ width: "200px" }}
                    onClick={() => addThumbnailHandler(song.id)}
                  >
                    Add Thumbnail
                  </button>
                </div>
              )}

              <h4 className="text-lg font-bold">
                {song.title.slice(0, 20)}...
              </h4>
              <h4 className="text-lg font-bold">
                {song.description.slice(0, 20)}...
              </h4>
              <button
                className="px-3 py-1 bg-red-500 text-white rounded-lg"
                onClick={() => deleteSong(song.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
