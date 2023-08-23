import styles from "../style";
import Mission from "./Mission";

const Vision = () => {
  return (
    <div
      className={`${styles.paddingX} bg-gray-300 pt-5 flex flex-col sm:flex-row`}
    >
      <Mission
        style="mr-0 sm:mr-5"
        sectionName="Our Mission"
        title="Creating valuable content for creatives all around the world"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                blandit massa enim nec. Scelerisque viverra mauris in aliquam
                sem."
      />
      <Mission
        style="mt-[-50px] sm:mt-0"
        sectionName="Our Vision"
        title="A platform that empowers individuals to improve"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                blandit massa enim nec. Scelerisque viverra mauris in aliquam
                sem."
      />
    </div>
  );
};

export default Vision;
