const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",
  heading:
    "font-poppins font-semibold text-[28px] leading-[46.8px] w-full mt-3",
  heading2:
    "font-poppins font-semibold xs:text-[30px] text-[25px] xs:leading-[60px] leading-[66.8px] w-full",
  paragraph:
    "font-poppins font-normal text-dimWhite text-[15px] leading-[28px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",

  navLink:
    "font-poppins sm:text-dimWhite font-normal cursor-pointer text-[15px] hover:text-white",

  formInput: `h-11 w-[300px] sm:w-[380px] px-6 text-[14px] border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-gray-400 placeholder-gray-300 placeholder-opacity-0 transition duration-200 mb-6 pt-4 pb-2`,
  inputSpan:
    "text-[16px] text-gray-400 text-opacity-80 absolute left-6 top-3 px-1 transition duration-200 input-text",
  inputBorder: "absolute top-0 left-1.5 px-5 h-2 bg-white",

  sectionHeading: `text-[34px] sm:text-[46px] text-white font-poppins font-semibold`,
  card: `m-4 w-[250px] min-h-[320px] relative rounded-lg transition-all hover:scale-105`,
  cardImage: `bg-gray-300 absolute top-0 h-[120px] rounded-t-lg w-full`,
  cardLinks: `text-white py-2 text-center rounded-lg font-poppins font-medium px-4 text-[14px]`,
  cardParagraph: `text-[13px] font-normal mb-3 text-left`,
  cardContent: `bg-amber-200 p-6 absolute top-[100px] text-center rounded-b-lg`,
  cardHeading: `text-[19px] font-semibold mb-3`,

  authorsList: `bg-amber-200 my-6 w-[220px] min-h-[260px] relative rounded-lg transition-all hover:scale-105`,
  authorImage: `mt-2 p-2 absolute top-0`,
  authorContent: `p-4 pt-2 absolute top-[120px] text-center rounded-b-lg`,

  btn: `font-poppins font-semibold transition-all bg-amber-500 hover:bg-amber-600 hover:text-white cursor-pointer tracking-wider text-[14px] text-primary rounded-xl outline-none`,
};

export const layout = {
  section: `flex md:flex-row flex-col`,
  sectionReverse: `flex md:flex-row flex-col-reverse`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-2  mb-4 sm-mb-0 sm:mr-4 rounded-lg min-h-[250px] sm:h-[440px]`,

  sectionLinks: `flex flex-row flex-wrap sm:mt-6 mt-5 mb-5`,
  sectionInfo: `flex-1 ${styles.flexStart} flex-col bg-blue-950 p-6 rounded-lg mb-6 sm-mb-0`,
};

export default styles;
