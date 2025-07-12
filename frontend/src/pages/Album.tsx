import { useParams } from "react-router-dom";
import { useSongData } from "../components/context/SongContext";
import { useUserData } from "../components/context/UserContext";
import Layout from "../layout/Layout";
import { useEffect } from "react";
import { HomeLoading } from "../components/Loading";
import { FaBookmark, FaPlay } from "react-icons/fa";

const Album = () => {
  const {
    fetchAlbumSongs,
    albumData,
    albumSong,
    setIsPlaying,
    setSelectedSong,
    loading,
  } = useSongData();
  const { isAuth, addToPlaylist } = useUserData();

  const { id } = useParams();
  useEffect(() => {
    if (id) {
      fetchAlbumSongs(id);
    }
  }, [id]);
  return (
    <Layout>
      {albumData && (
        <>
          {loading ? (
            <HomeLoading />
          ) : (
            <>
              <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-center">
                {albumData.thumbnail && (
                  <img
                    src={albumData.thumbnail}
                    className="w-48 rounded"
                    alt="album image"
                  />
                )}
                <div className="flex flex-col">
                  <p>Playlist</p>
                  <h2 className="text-3xl font-bold mb-4 md:text-5xl">
                    {albumData.title} Playlist
                  </h2>
                  <h4 className="text-muted-foreground">
                    {albumData.description}
                  </h4>
                  <p className="mt-1">
                    <img src="/logo.png" className="inline-block w-6" />
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
                <p>
                  <b className="mr-4">#</b>
                </p>
                <p className="hidden sm:block">Description</p>
                <p className="text-center">Actions</p>
              </div>
              <hr />
              {albumSong &&
                albumSong.map((song, i) => (
                  <div
                    className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
                    key={i}
                  >
                    <p className="text-white">
                      <b className="mr-4 text-[#a7a7a7]">{i + 1}</b>
                      <img
                        src={song.thumbnail ? song.thumbnail : "/download.jpeg"}
                        className="inline w-10 mr-5"
                      />
                      {song.title}
                    </p>
                    <p className="text-[15px] hidden sm:block">
                      {song.description.slice(0, 30)}...
                    </p>
                    <p className="flex justify-center items-center gap-5">
                      {isAuth && (
                        <button
                          className="text-[15px] text-center"
                          onClick={() => {
                            addToPlaylist(song.id);
                          }}
                        >
                          <FaBookmark />
                        </button>
                      )}
                      <button
                        className="text-[15px] text-center p-3"
                        onClick={() => {
                          setSelectedSong(song.id);
                          setIsPlaying(true);
                        }}
                      >
                        <FaPlay />
                      </button>
                    </p>
                  </div>
                ))}
            </>
          )}
        </>
      )}
    </Layout>
  );
};

export default Album;
