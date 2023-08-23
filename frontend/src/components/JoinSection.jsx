import styles, { layout } from "../style";
import { Link } from "react-router-dom";
import { useAuthentication } from "../context";

const JoinSection = () => {
  const [authenticate, setAuthenticate] = useAuthentication();

  return (
    <section className={`${styles.padding} ${styles.flexCenter}`}>
      <div className="pb-6 sm:pb-4 pt-3 sm:pt-0 max-w-[260px] text-center">
        <h4 className={`${styles.cardHeading} font-poppins`}>
          Join our team to be a part of our story
        </h4>
        <p className={`${styles.cardParagraph} text-center py-4`}>
          Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod.
        </p>
        <Link
          to={
            authenticate.user
              ? "/blog_Website/createBlog"
              : "/blog_Website/login"
          }
          className={`bg-amber-600 hover:bg-amber-500 ${styles.cardLinks}`}
        >
          Join Now
        </Link>
      </div>
    </section>
  );
};

export default JoinSection;
