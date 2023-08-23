import styles from "../style";
import { footerLinks, MediaLinks } from "../constants/tags";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.paddingX} pt-3 pb-8 bg-blue-950 flex-col`}
    >
      <div className={`md:flex-row flex-col mb-8 w-[90%] ${styles.paddingX}`}>
        <div className="flex flex-row justify-between flex-wrap mt-5">
          {footerLinks.map((footerlink) => (
            <div
              key={footerlink.title}
              className={`flex flex-col min-w-[150px]`}
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white mt-4">
                {footerlink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerlink.links.map((link) => (
                  <li
                    key={link.name}
                    className={`${styles.navLink} mb-4 text-dimWhite`}
                  >
                    <Link to={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`w-[90%] flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#66656b] ${styles.paddingX}`}
      >
        <p className={`${styles.paragraph}`}>
          Copyright &copy; 2023 Bloggeria. All Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          {MediaLinks.map((media, index) => (
            <img
              key={media.id}
              src={media.icon}
              alt={media.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer hover:scale-125 transition-all ease-in ${
                index !== MediaLinks.length - 1 ? "mr-8" : "mr-0"
              }`}
              onClick={() => window.open(media.link)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
