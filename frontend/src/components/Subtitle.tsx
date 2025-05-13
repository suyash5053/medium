import { Link } from "react-router-dom";

interface SubtitleProps {
  text: string;
  linkText: string;
  href: string;
}

const Subtitle = (props: SubtitleProps) => {
  return (
    <div className="text-xl flex gap-2">
      <div>{props.text}</div>
      <Link to={props.href} className="underline">
        {props.linkText}
      </Link>
    </div>
  );
};

export default Subtitle;
