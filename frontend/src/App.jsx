import { Routes, Route } from "react-router-dom";
import Protected from "./Protected";
import {
  Home,
  Login,
  Register,
  My_Blogs,
  Create_Blog,
  UpdateBlog,
  All_Blogs,
  About,
  Contact,
  Blog,
  Missing,
  UserProfile,
} from "./pages/ExportPages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/blog_Website/" element={<Home />} />
        <Route path="/blog_Website/login" element={<Login />} />
        <Route path="/blog_Website/register" element={<Register />} />
        <Route path="/blog_Website/allBlogs" element={<All_Blogs />} />
        <Route path="/blog_Website/Blog" element={<Blog />} />
        <Route path="/blog_Website/about" element={<About />} />
        <Route path="/blog_Website/contact" element={<Contact />} />
        <Route path="/blog_Website/*" element={<Missing />} />
        <Route element={<Protected />}>
          <Route path="/blog_Website/user/:id" element={<UserProfile />} />
          <Route path="/blog_Website/myBlogs" element={<My_Blogs />} />
          <Route path="/blog_Website/createBlog" element={<Create_Blog />} />
          <Route path="/blog_Website/updateBlog/:id" element={<UpdateBlog />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
