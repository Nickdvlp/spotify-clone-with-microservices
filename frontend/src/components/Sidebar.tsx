import { useNavigate } from "react-router-dom";
import PlaylistCard from "./PlaylistCard";
import { useUserData } from "./context/UserContext";

const Sidebar = () => {
  const navigate = useNavigate();
  const { user } = useUserData();
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 hidden lg:flex text-white">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div
          className="flex items-center gap-3 pl-8 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src="/home.png" alt="home" className="w-6" />
          <p className="font-bold">Home</p>
        </div>
        <div
          className="flex items-center gap-3 pl-8 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src="/search.png" alt="home" className="w-6" />
          <p className="font-bold">Search</p>
        </div>
      </div>
      <div className="bg-[#121212] h-[85%] rounded">
        <div className=" flex pt-4 items-center justify-between ">
          <div className="flex items-center gap-3 pl-8 cursor-pointer">
            <img src="/stack.png" className="w-6" alt="library" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3 mr-3 cursor-pointer">
            <img src="/arrow.png" className="w-6" alt="back" />
            <img src="/plus.png" className="w-6" alt="add to library" />
          </div>
        </div>

        <div
          onClick={() => navigate("/playlist")}
          className="flex pt-4 items-center justify-between"
        >
          <PlaylistCard />
        </div>

        <div className="p-4 m-2 bg-main rounded font-semibold flex flex-col items-start gap-1 pl-4 mt-4">
          <h1>Let's find some podcasts to follow</h1>
          <p className="font-light">we'll keep you update on new episodes</p>
          <button className="px-4 py-1.5 bg-white text-black text-md rounded-full mt-4">
            Browse Podcasts
          </button>
        </div>
        {user && user.role === "admin" && (
          <button
            className="px-4 py-1.5 bg-white text-black text-md rounded-full mt-4"
            onClick={() => navigate("/admin/dashboard")}
          >
            Admin Dashboard
          </button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
