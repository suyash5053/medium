import Appbar from "../components/Appbar";
import BlogCard from "../components/BlogCard";
import Skeleton from "../components/Skeleton";
import useBlogs from "../hooks/useBlogs";

const BlogsPage = () => {
  const { loading, blogs } = useBlogs();
  return (
    <div className="h-screen flex flex-col items-center">
      <Appbar />
      <div className="w-2/3 p-2 flex flex-col items-center">
        {loading && <Skeleton />}
        {!loading &&
          blogs.map((blog: { title: string; content: string }) => (
            <BlogCard
              authorName="suyash"
              title={blog.title}
              content={blog.content}
              publishedDate="13 May, 2025"
            />
          ))}
      </div>
    </div>
  );
};

export default BlogsPage;
