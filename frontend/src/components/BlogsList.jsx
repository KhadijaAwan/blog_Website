import styles, { layout } from "../style";
import { icon } from "../assets/index";
import { Link } from "react-router-dom";

const BlogsList = () => {
  return (
    <div className={`${layout.sectionInfo} flex-col bg-gray-600`}>
      <div className="flex flex-row mb-6 w-full relative">
        <h1 className={`${styles.paragraph} uppercase mt-1`}>All Posts</h1>
        <Link
          to="/blog_Website/allBlogs"
          className={`${styles.cardLinks} absolute right-3`}
        >
          View All
        </Link>
      </div>

      <div className={`flex flex-row rounded-[20px] p-5 feature-card w-full`}>
        <div
          className={`w-[70px] h-[70px] rounded-full bg-dimBlue ${styles.flexCenter}`}
        >
          <img
            src={icon}
            alt="blog-image"
            className={`w-[70%] h-[70%] object-contain rounded-lg`}
          />
        </div>

        <div className="flex-col flex flex-1 ml-3 font-poppins leading-6">
          <p className={`${styles.paragraph} mb-2`}>
            By <span className="text-amber-400 mr-3">John Deyor </span> 24th
            June 2023
          </p>
          <h4 className={`${styles.cardHeading} leading-6 text-white`}>
            Post that can make you happy
          </h4>
        </div>
      </div>

      <div className={`flex flex-row rounded-[20px] p-5 feature-card w-full`}>
        <div
          className={`w-[70px] h-[70px] rounded-full bg-dimBlue ${styles.flexCenter}`}
        >
          <img
            src={icon}
            alt="blog-image"
            className={`w-[70%] h-[70%] object-contain rounded-lg`}
          />
        </div>

        <div className="flex-col flex flex-1 ml-3 font-poppins leading-6">
          <p className={`${styles.paragraph} mb-2`}>
            By <span className="text-amber-400 mr-3">John Deyor </span> 24th
            June 2023
          </p>
          <h4 className={`${styles.cardHeading} leading-6 text-white`}>
            Post that can make you happy
          </h4>
        </div>
      </div>

      <div className={`flex flex-row rounded-[20px] p-5 feature-card w-full`}>
        <div
          className={`w-[70px] h-[70px] rounded-full bg-dimBlue ${styles.flexCenter}`}
        >
          <img
            src={icon}
            alt="blog-image"
            className={`w-[70%] h-[70%] object-contain rounded-lg`}
          />
        </div>

        <div className="flex-col flex flex-1 ml-3 font-poppins leading-6">
          <p className={`${styles.paragraph} mb-2`}>
            By <span className="text-amber-400 mr-3">John Deyor </span> 24th
            June 2023
          </p>
          <h4 className={`${styles.cardHeading} leading-6 text-white`}>
            Post that can make you happy
          </h4>
        </div>
      </div>

      <div className={`flex flex-row rounded-[20px] p-5 feature-card w-full`}>
        <div
          className={`w-[70px] h-[70px] rounded-full bg-dimBlue ${styles.flexCenter}`}
        >
          <img
            src={icon}
            alt="blog-image"
            className={`w-[70%] h-[70%] object-contain rounded-lg`}
          />
        </div>

        <div className="flex-col flex flex-1 ml-3 font-poppins leading-6">
          <p className={`${styles.paragraph} mb-2`}>
            By <span className="text-amber-400 mr-3">John Deyor </span> 24th
            June 2023
          </p>
          <h4 className={`${styles.cardHeading} leading-6 text-white`}>
            Post that can make you happy
          </h4>
        </div>
      </div>
    </div>
  );
};

export default BlogsList;
