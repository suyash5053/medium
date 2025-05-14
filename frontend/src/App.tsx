import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupPage from "./pages/Signup";
import SigninPage from "./pages/Signin";
import BlogsPage from "./pages/Blogs";
import BlogPage from "./pages/Blog";
import NewBlog from "./pages/NewBlog";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" Component={SignupPage} />
          <Route path="/signin" Component={SigninPage} />
          <Route path="/blogs" Component={BlogsPage} />
          <Route path="/blog/:id" Component={BlogPage} />
          <Route path="/new" Component={NewBlog} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
