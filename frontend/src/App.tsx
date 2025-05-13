import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupPage from "./pages/Signup";
import SigninPage from "./pages/Signin";
import BlogPage from "./pages/Blog";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" Component={SignupPage} />
          <Route path="/signin" Component={SigninPage} />
          <Route path="/blog/:id" Component={BlogPage} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
