import Layout from "../components/Layout";
import Button from "./../components/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { port_no } from "../port";
import styles from "./../style";

const Create_Blog = () => {
  const id = localStorage.getItem("userId");
  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const blog_CreationFunction = async (e) => {
    e.preventDefault();
    try {
      const newBlog = new FormData();
      newBlog.append("title", title);
      newBlog.append("photo", photo);
      newBlog.append("description", description);
      newBlog.append("user", id);
      const { data } = await axios.post(
        `${port_no}/api/v1/blog/createBlog`,
        newBlog
      );
      if (data?.success) {
        alert("Blog Created Successfully");
        navigate("/blog_Website/myBlogs");
      } else {
        alert(data?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <section className="bg-purple-100 p-4 pt-6 pb-16">
        <h1 className={`${styles.heading2} text-center text-blue-950 mb-4`}>
          Create New Post
        </h1>
        <div className="flex justify-center items-center p-2">
          <form
            onSubmit={blog_CreationFunction}
            className="flex flex-col p-3 sm:p-5 bg-slate-200 rounded-lg max-w-[330px] sm:min-w-[600px] mx-auto"
          >
            <label className="relative cursor-pointer">
              <div className={`${styles.inputBorder} min-w-[125px]`}></div>
              <input
                type="text"
                placeholder="Input"
                className={`${styles.formInput} sm:w-[550px]`}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <span className={`${styles.inputSpan}`}>Enter Post Title</span>
            </label>

            <input
              type="file"
              accept="images/*"
              className={`${styles.formInput} h-[55px] sm:w-[550px] ${styles.btn} mx-auto`}
              onChange={(e) => setPhoto(e.target.files[0])}
              required
            />

            <label className="relative cursor-pointer">
              <div className={`${styles.inputBorder} min-w-[175px]`}></div>
              <textarea
                placeholder="Input"
                className={`${styles.formInput} outline-none min-h-[120px] resize-none sm:w-[550px]`}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
              <span className={`${styles.inputSpan}`}>
                Enter Post Description
              </span>
            </label>
            <Button title="Post Now" style={"mt-3 w-[130px] mx-auto"} />
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Create_Blog;
