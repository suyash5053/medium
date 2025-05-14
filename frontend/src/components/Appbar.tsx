import { Plus } from "lucide-react";
import Avatar from "./Avatar";
import { useNavigate } from "react-router-dom";

const Appbar = () => {
  const navigate = useNavigate();
  return (
    <div className="h-20 px-10 py-2 flex items-center justify-between w-full border-b border-b-slate-300">
      <div className="text-2xl font-bold">Blooger</div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate("/new")}
          className="flex items-center px-2 gap-1 border bg-green-600 hover:bg-green-700 p-1 rounded-md"
        >
          New <Plus size={20} />
        </button>
        <Avatar size={"big"} authorName="Suyash" />
      </div>
    </div>
  );
};

export default Appbar;
