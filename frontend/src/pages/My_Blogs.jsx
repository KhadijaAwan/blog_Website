import Layout from "../components/Layout";
import BlogsView from "../components/BlogsView";
import SyncLoader from "react-spinners/SyncLoader";
import { useState, useEffect } from "react";
import axios from "axios";
import { port_no } from "./../port";
import styles from "../style";
import moment from "moment";

const My_Blogs = () => {
  const [userBlogs, setUserBlogs] = useState([]);
  const [load, setLoad] = useState(false);

  const userBlogsFunction = async () => {
    try {
      const id = localStorage.getItem("userId");
      const { data } = await axios.get(
        `${port_no}/api/v1/blog/viewUserBlog/${id}`
      );
      if (data?.success) {
        setUserBlogs(data?.user_blogs.blogs);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userBlogsFunction();
  }, []);

  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 6000);
  }, []);

  return (
    <Layout>
      <section className="bg-purple-100 pt-8 pb-16 w-full">
        {load ? (
          <div className={`${styles.flexCenter} h-[300px]`}>
            <SyncLoader
              color={"#9a6abf"}
              loading={load}
              size={20}
              aria-label="Loading Spinner"
            />
          </div>
        ) : (
          <>
            <h1
              className={`${styles.heading2} ${styles.paddingX} text-center sm:text-start py-3 text-blue-950`}
            >
              My Blogs
            </h1>
            <div className="w-full flex justify-center">
              <div
                className={`py-2 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}
              >
                {userBlogs &&
                  userBlogs.map((blog) => (
                    <BlogsView
                      userPresent="true"
                      key={blog._id}
                      blog_id={blog._id}
                      cardImage={`${port_no}/api/v1/blog/readBlogPhoto/${blog._id}`}
                      cardHeading={blog.title}
                      cardParagraph={blog.description}
                      cardTime={moment(blog.createdAt).format("LLL")}
                    />
                  ))}
              </div>
            </div>
          </>
        )}
      </section>
    </Layout>
  );
};

export default My_Blogs;
