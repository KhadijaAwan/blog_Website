import styles, { layout } from "../style";
import { featuredLinks } from "../constants/tags";

const Honoured = () => {
  return (
    <section className={`${styles.flexCenter} py-5 flex flex-col sm:flex-row`}>
      <div
        className={`${layout.sectionInfo} font-poppins w-[80%] bg-green-200 px-14 sm:px-7 mx-4`}
      >
        <h3 className="font-medium tracking-widest text-[13px] mb-2">We are</h3>
        <h1 className={`${styles.cardHeading} min-w-[160px]`}>Featured in</h1>
      </div>

      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {featuredLinks.map((featured) => (
          <div
            key={featured.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] sm:m-5`}
          >
            <img
              src={featured.icon}
              alt="newsletters_logo"
              className="sm:w-[180px] w-[100px] h-[80px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Honoured;
