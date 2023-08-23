import FeaturedBlog from "./FeaturedBlog";
import BlogsList from "./BlogsList";
import styles, { layout } from "../style";

const HomeBlogs = () => {
  return (
    <section className={`${layout.section} ${styles.padding} bg-gray-200`}>
      <FeaturedBlog />
      <BlogsList />
    </section>
  );
};

export default HomeBlogs;
