interface AvatarProps {
  authorName: string;
  size: "small" | "big";
}

const Avatar = (props: AvatarProps) => {
  return (
    <div
      className={`flex items-center justify-center ${props.size === "small" ? "w-6 h-6" : "w-10 h-10"} rounded-full bg-black text-white`}
    >
      {props.authorName[0].toUpperCase()}
    </div>
  );
};

export default Avatar;
