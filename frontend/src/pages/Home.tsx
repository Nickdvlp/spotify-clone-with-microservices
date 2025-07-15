import { AlbumsCard } from "../components/AlbumsCard";
import { useSongData } from "../components/context/SongContext";
import { HomeLoading } from "../components/Loading";
import { SongsCard } from "../components/SongsCard";
import Layout from "../layout/Layout";

const Home = () => {
  const { albums, songs, loading } = useSongData();
  console.log(songs);

  return (
    <div>
      {loading ? (
        <HomeLoading />
      ) : (
        <Layout>
          {!loading && (
            <div>
              <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
                <div className="flex overflow-auto">
                  {albums?.map((album, i) => {
                    return (
                      <AlbumsCard
                        key={i}
                        image={album.thumbnail}
                        name={album.title}
                        id={album.id}
                        desc={album.description}
                      />
                    );
                  })}
                </div>
              </div>

              <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl">Today's top songs</h1>
                <div className="flex overflow-auto">
                  {songs?.map((album, i) => {
                    return (
                      <SongsCard
                        key={i}
                        image={album.thumbnail}
                        name={album.title}
                        id={album.id}
                        desc={album.description}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </Layout>
      )}
    </div>
  );
};

export default Home;
