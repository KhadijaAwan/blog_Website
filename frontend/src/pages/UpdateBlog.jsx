import Layout from "../components/Layout";
import Button from "./../components/Button";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { port_no } from "../port";
import styles from "./../style";

const UpdateBlog = () => {
  const user_id = localStorage.getItem("userId");
  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  const blogData = async () => {
    try {
      const { data } = await axios.get(
        `${port_no}/api/v1/blog/viewBlog/${params.id}`
      );
      setTitle(data.blog.title);
      setDescription(data.blog.description);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    blogData();
  }, []);

  const blog_UpdateFunction = async (e) => {
    e.preventDefault();
    try {
      const newBlog = new FormData();
      newBlog.append("title", title);
      photo && newBlog.append("photo", photo);
      newBlog.append("description", description);
      newBlog.append("user", user_id);
      const { data } = await axios.put(
        `${port_no}/api/v1/blog/updateBlog/${params.id}`,
        newBlog
      );
      if (data?.success) {
        alert("Blog Updated Successfully");
        navigate("/blog_Website/allBlogs");
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
          Update Post
        </h1>
        <div className="flex justify-center items-center p-2">
          <form
            onSubmit={blog_UpdateFunction}
            className="flex flex-col p-3 sm:p-5 bg-slate-200 rounded-lg max-w-[330px] sm:min-w-[600px] mx-auto"
          >
            <label className="relative cursor-pointer">
              <div className={`${styles.inputBorder} min-w-[125px]`}></div>
              <input
                type="text"
                placeholder="Input"
                value={title}
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
            />
            <div className="flex justify-center mt-2 mb-5">
              <img
                src={
                  photo
                    ? URL.createObjectURL(photo)
                    : `${port_no}/api/v1/blog/readBlogPhoto/${params.id}`
                }
                alt="blog-image"
                className="w-[200px] h-[200px] rounded-md"
              />
            </div>

            <label className="relative cursor-pointer">
              <div className={`${styles.inputBorder} min-w-[175px]`}></div>
              <textarea
                placeholder="Input"
                value={description}
                className={`${styles.formInput} outline-none min-h-[120px] resize-none sm:w-[550px]`}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
              <span className={`${styles.inputSpan}`}>
                Enter Post Description
              </span>
            </label>
            <Button title="Update" style={"mt-3 w-[130px] mx-auto"} />
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default UpdateBlog;
