import Avatar from "./Avatar";

interface BlogCardProps {
  authorName: string;
  publishedDate: string;
  title: string;
  content: string;
}

const BlogCard = (props: BlogCardProps) => {
  return (
    <div className="flex flex-col border-b-slate-300 border-b p-2 gap-2 w-full">
      <div className="flex items-center gap-2">
        <Avatar authorName={props.authorName} size={"small"} />
        <div className="font-light">{props.authorName}</div>
        <div>{props.publishedDate}</div>
      </div>
      <div className="text-4xl font-bold">{props.title}</div>
      <div className="text-xl">
        {props.content.length > 100
          ? `${props.content.slice(0, 100)}...`
          : `${props.content}`}
      </div>
      <div className="font-extralight">{`${Math.ceil(props.content.length / 100) / 2} minutes read`}</div>
    </div>
  );
};

export default BlogCard;
