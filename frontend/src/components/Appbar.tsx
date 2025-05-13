import Avatar from "./Avatar";

const Appbar = () => {
  return (
    <div className="h-20 px-10 py-2 flex items-center justify-between w-full border-b border-b-slate-300">
      <div className="text-2xl font-bold">Blooger</div>
      <Avatar size={"big"} authorName="Suyash" />
    </div>
  );
};

export default Appbar;
