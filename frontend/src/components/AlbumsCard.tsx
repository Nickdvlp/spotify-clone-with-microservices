import { useNavigate } from "react-router-dom";

interface AlbumsCardProps {
  id: string;
  image: string;
  name: string;
  desc: string;
}

export const AlbumsCard = ({ id, image, name, desc }: AlbumsCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26"
      onClick={() => navigate(`/album/${id}`)}
    >
      <img src={image} className="rounded w-[160px]" alt={name} />
      <p className="font-bold mt-2 mb-1">{name}...</p>
      <p className=" text-slate-200 text-sm">{desc}...</p>
    </div>
  );
};
