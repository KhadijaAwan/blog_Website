import styles, { layout } from "../style";
import Links from "./Links";

const BlogsView = ({
  blog_id,
  cardImage,
  cardHeading,
  cardParagraph,
  cardTime,
  userPresent,
}) => {
  return (
    <section className={`${styles.card}`}>
      <div className={`${styles.cardImage}`}>
        <img
          src={cardImage}
          alt="post-photo"
          className="w-full h-full rounded-t-lg"
        />
      </div>
      <div className={`${styles.cardContent} w-full`}>
        <h4 className={`${styles.cardHeading}`}>{cardHeading}</h4>
        <p className={`${styles.cardParagraph} line-clamp-2`}>
          {cardParagraph}
        </p>
        <div className="mb-5 text-[12px]">
          <span>{cardTime}</span>
        </div>
        {userPresent ? <Links blog_id={blog_id} /> : ""}
      </div>
    </section>
  );
};

export default BlogsView;
