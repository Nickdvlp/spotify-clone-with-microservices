import { FaBookmark, FaPlay } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
import { useUserData } from "./context/UserContext";
import { useSongData } from "./context/SongContext";

interface SongsCardProps {
  id: string;
  image: string;
  name: string;
  desc: string;
}

export const SongsCard = ({ id, image, name, desc }: SongsCardProps) => {
  // const navigate = useNavigate();

  const { addToPlaylist, isAuth } = useUserData();
  const { setSelectedSong, setIsPlaying } = useSongData();

  const addToPlaylistHandler = () => {
    addToPlaylist(id);
  };
  return (
    <div
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26"
      onClick={
        () => {}
        // () => navigate(`/album/${id}`)
      }
    >
      <div className="relative group">
        <img
          src={image ? image : "./download.jpeg"}
          alt={name}
          className="mr-1 w-[160px] rounded"
        />
        <div className="flex gap-2">
          <button
            className="absolute bottom-2 right-14 bg-green-500 text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            onClick={(e) => {
              setSelectedSong(id);
              setIsPlaying(true);
              e.stopPropagation();
            }}
          >
            <FaPlay />
          </button>
          {isAuth && (
            <button className="absolute bottom-2 right-2 bg-green-500 text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
              <FaBookmark
                onClick={(e) => {
                  e.stopPropagation();
                  addToPlaylistHandler();
                }}
              />
            </button>
          )}
        </div>
      </div>
      <p className="font-bold mt-2 mb-1">{name.slice(0, 20)}...</p>
      <p className="text-slate-200 text-sm">{desc.slice(0, 20)}...</p>
    </div>
  );
};
