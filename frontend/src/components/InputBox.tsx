import type { ChangeEvent } from "react";

interface InputBoxProps {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const InputBox = (props: InputBoxProps) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-lg font-semibold">{props.label}</span>
      <input
        placeholder={props.placeholder}
        className="w-full p-2 border rounded-md"
        onChange={props.onChange}
        type={props.type}
      />
    </div>
  );
};

export default InputBox;
