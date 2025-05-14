import axios from "axios";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { BACKEND_URL } from "../config";

const Editor = () => {
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
  });

  const handleSubmit = async () => {
    const res = await axios.post(`${BACKEND_URL}/api/v1/blog`, inputs, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    if (res) {
      alert("Your blog has been submitted");
    }
  };
  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="text-4xl font-bold">Create New Blog</div>
      <input
        placeholder="Enter your title"
        className="p-2 border rounded-md"
        onChange={(e) =>
          setInputs((c) => ({
            ...c,
            title: e.target.value,
          }))
        }
      />
      <ReactQuill
        placeholder="Write your content here"
        theme="snow"
        value={inputs.content}
        onChange={(value) => {
          setInputs({ ...inputs, content: value });
          console.log(inputs.content);
        }}
        className="h-1/2"
      />
      <div>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-md border mt-20 lg:mt-10"
        >
          Publish
        </button>
      </div>
    </div>
  );
};

export default Editor;
