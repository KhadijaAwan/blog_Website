import { Link } from "react-router-dom";
import styles from "../style";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { port_no } from "../port";

const Links = ({ style, blog_id }) => {
  const navigate = useNavigate();

  const deleteBlog_Function = async () => {
    try {
      const { data } = await axios.delete(
        `${port_no}/api/v1/blog/deleteBlogs/${blog_id}`
      );
      if (data?.success) {
        alert("Blog Deleted Successfully");
        navigate("/blog_Website/allBlogs");
      } else {
        alert(data?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Link
        to={`/blog_Website/updateBlog/${blog_id}`}
        className={`bg-green-700 hover:bg-green-500 mr-6 ${styles.cardLinks} ${style}`}
      >
        Update
      </Link>
      <Link
        className={`bg-red-600 hover:bg-red-500 ${styles.cardLinks} ${style}`}
        onClick={deleteBlog_Function}
      >
        Delete
      </Link>
    </>
  );
};

export default Links;
