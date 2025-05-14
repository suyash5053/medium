import Appbar from "../components/Appbar";
import Editor from "../components/Editor";

const NewBlog = () => {
  return (
    <div className="flex flex-col items-center  h-screen overflow-hidden">
      <Appbar />
      <div className="lg:w-1/2 w-full  flex-1 p-2">
        <Editor />
      </div>
    </div>
  );
};

export default NewBlog;
