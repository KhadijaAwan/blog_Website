import styles from "../style";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useAuthentication } from "../context";

const Hero = () => {
  const [authenticate, setAuthenticate] = useAuthentication();

  return (
    <section
      className={`flex ${styles.paddingY} px-6 bg-hero-background bg-center bg-cover w-full min-h-[570px] relative`}
    >
      <div className="bg-black opacity-50 absolute w-full h-full top-0 left-0"></div>

      {/* the content section  */}
      <div className="z-30 flex-1 flex-row items-center justify-between max-w-full p-6">
        <h6 className="font-poppins uppercase text-white tracking-wider mb-4 pt-6">
          Posted on <span className="font-semibold">Startup</span>
        </h6>

        <h1
          className={
            "font-poppins text-white mt-4 font-semibold ss:text-[45px] text-[30px] max-w-[750px] mb-4"
          }
        >
          Step-by-step guide to choosing great font pairs
        </h1>

        <h6 className={"font-poppins text-white text-[14px]"}>
          By <span className="text-amber-500">James West </span>| June 23, 2023
        </h6>

        <p
          className={
            "font-poppins text-dimWhite max-w-[570px] mt-3 text-[14px] py-2 leading-6"
          }
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          quisquam cumque commodi iusto sint quae dolorum ex, magni, error
          ratione.
        </p>
        <Link
          to={
            authenticate.user
              ? "/blog_Website/createBlog"
              : "/blog_Website/login"
          }
        >
          <Button title="Post Your Blog" style={"mt-6"} />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
