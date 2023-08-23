import styles, { layout } from "../style";
import { logo } from "../assets/index";
import { Link } from "react-router-dom";

const FeaturedBlog = () => {
  return (
    <div
      className={`${layout.sectionInfo} mr-0 sm:mr-10 bg-gray-600 ${styles.paddingX}`}
    >
      <h1 className={`${styles.paragraph} uppercase`}>Featured Post</h1>
      <div className={`${styles.padding} bg-purple-200 rounded-lg my-3`}>
        <img src={logo} alt="blog-image" />
      </div>
      <h1 className={`${styles.sectionHeading}`}>My First Post</h1>
      <p className={`${styles.paragraph} max-w-[510px] mt-3`}>
        How much money do you leave on the table each month? Too many businesses
        “forget” to bill all hours worked.
      </p>

      <div className={`${layout.sectionLinks}`}>
        <Link
          to=""
          className={`w-[140px] p-5 text-[16px] bg-amber-600 hover:bg-amber-500 ${styles.cardLinks}`}
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default FeaturedBlog;
