import Layout from "../components/Layout";
import styles, { layout } from "../style";
import JoinSection from "./../components/JoinSection";
import { about, started, creative } from "../assets/index";
import { analysis } from "../constants/tags";
import Vision from "../components/Vision";
import AuthorsView from "../components/AuthorsView";

const About = () => {
  return (
    <Layout>
      <section className={`${styles.section} w-[95%] lg:w-[80%] mx-auto`}>
        <div
          className={`${styles.paddingX} bg-gray-300 pt-5 flex flex-col md:flex-row`}
        >
          <div
            className={`${layout.sectionInfo} mt-3 bg-white mr-0 sm:mr-5 max-w-[400px]`}
          >
            <h1 className="uppercase font-poppins tracking-widest text-[13px]">
              About Us
            </h1>
            <h1 className={`${styles.heading}`}>
              We are a team of content writers who share their learnings
            </h1>
          </div>

          <p className="max-w-[400px] p-5 text-[13px] sm:mb-5 md:mt-9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>
        </div>

        <div className="h-[300px] relative">
          <img src={about} alt="background" className="h-[100%] w-full" />
          <section className="absolute bottom-[10px] left-1 sm:left-20 h-[110px] flex flex-row bg-amber-400 max-w-[250px] sm:min-w-[450px] mx-auto sm:mx-0">
            {analysis.map((a) => (
              <div key={a.id} className="font-poppins flex-1 flex flex-col m-3">
                <h4 className={`font-semibold text-[20px] sm:text-[30px]`}>
                  {a.value}
                </h4>
                <p className={`text-[12px]`}>{a.title}</p>
              </div>
            ))}
          </section>

          <div className="absolute bottom-0 left-2 sm:left-20 h-[16px] flex">
            <div className="bg-purple-700 w-[170px] sm:w-[280px]"></div>
            <div className="bg-amber-400 w-[170px] sm:w-[280px]"></div>
          </div>
        </div>

        <Vision />

        {/* Team of Creatives Section */}
        <div
          className={`bg-purple-300 ${layout.section} ${styles.paddingX} pb-5 sm:pb-0`}
        >
          <div
            className={`${layout.sectionInfo} font-poppins mr-0 sm:mr-5 bg-inherit`}
          >
            <h1 className={`${styles.heading}`}>Our team of creatives</h1>
            <h1 className={`text-[15px] font-semibold max-w-[320px] my-2`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </h1>
            <p
              className={`${styles.cardParagraph} max-w-[380px] text-gray-600`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
          </div>

          <div className={`${layout.sectionImg} relative`}>
            <img
              src={creative}
              alt="creative-Team-picture"
              className="rounded-lg"
            />
            <div className="hidden md:block absolute left-[-35px] top-[30%] bg-amber-400 w-[90px] h-[100px] rounded-tl-[40px]"></div>
          </div>
        </div>

        {/* Why we have Started Section */}
        <div
          className={`bg-gray-300 ${layout.sectionReverse} ${styles.paddingX} pb-5`}
        >
          <div className={`${layout.sectionImgReverse} bg-inherit relative`}>
            <img
              src={started}
              alt="creative-Team-picture"
              className="rounded-lg"
            />
            <div className="hidden md:block absolute left-[25%] bottom-4 bg-purple-900 w-[45px] h-[45px] rounded-full"></div>
          </div>

          <div className={`${layout.sectionInfo} font-poppins bg-inherit`}>
            <h1 className={`${styles.heading}`}>Why we started this Blog</h1>
            <h1 className={`text-[15px] font-semibold max-w-[320px] my-2`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </h1>
            <p
              className={`${styles.cardParagraph} max-w-[380px] text-gray-600`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
          </div>
        </div>

        <AuthorsView />
      </section>

      <JoinSection />
    </Layout>
  );
};

export default About;
