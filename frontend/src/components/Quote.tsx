interface QuoteProps {
  quote: string;
  author: string;
  designation: string;
}

const Quote = (props: QuoteProps) => {
  return (
    <div className="w-full h-full bg-gray-200 flex flex-col justify-center items-center">
      <div className="max-w-1/2 flex flex-col gap-2">
        <div className="text-4xl font-bold text-left">"{props.quote}"</div>
        <div className="flex flex-col items-start">
          <div className="text-xl font-bold">{props.author}</div>
          <div>{props.designation}</div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
