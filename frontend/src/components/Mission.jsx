import styles, { layout } from "../style";

const Mission = ({ sectionName, title, paragraph, style }) => {
  return (
    <div
      className={`${styles.paddingX} bg-gray-300 pt-5 flex flex-col sm:flex-row`}
    >
      <div className={`${layout.sectionInfo} font-poppins bg-inherit ${style}`}>
        <h3 className="uppercase font-medium tracking-widest text-[13px] mb-4">
          {sectionName}
        </h3>
        <h1 className={`${styles.cardHeading} max-w-[300px]`}>{title}</h1>
        <p className={`${styles.cardParagraph} max-w-[380px] text-gray-600`}>
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default Mission;
