import styles, { layout } from "../style";
import { MediaLinks } from "../constants/tags";

const Authors = ({ cardImage, cardHeading, cardvalue, cardCompany }) => {
  return (
    <div
      className={`${styles.authorsList} ${styles.flexCenter} ${layout.section}`}
    >
      <div className={`${styles.authorImage} pb-3`}>
        <img
          src={cardImage}
          alt="post-photo"
          className="rounded-full w-[100px] h-[100px]"
        />
      </div>
      <div className={`${styles.authorContent}`}>
        <h4 className={`${styles.cardHeading}`}>{cardHeading}</h4>
        <p className={`${styles.cardParagraph}`}>
          {cardvalue} @ {cardCompany}
        </p>
        <div className={`flex flex-row md:mt-0 my-6 ${styles.flexCenter}`}>
          {MediaLinks.map((media, index) => (
            <img
              key={media.id}
              src={media.icon}
              alt={media.id}
              className={`bg-gray-700 p-1 object-contain w-[25px] h-[25px] rounded-full cursor-pointer hover:scale-125 transition-all ease-in ${
                index !== MediaLinks.length - 1 ? "mr-3" : "mr-0"
              }`}
              onClick={() => window.open(media.link)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Authors;
