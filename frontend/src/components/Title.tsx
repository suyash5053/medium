interface TitleProps {
  text: string;
}

const Title = (props: TitleProps) => {
  return <div className="text-4xl font-bold">{props.text}</div>;
};

export default Title;
