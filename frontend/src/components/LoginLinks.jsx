import { visitersLinks } from "../constants/tags";
import { NavLink } from "react-router-dom";
import { useAuthentication } from "../context";
import styles from "../style";
const user_id = localStorage.getItem("userId");

const LoginLinks = () => {
  const [authenticate, setAuthenticate] = useAuthentication();

  const logout = () => {
    setAuthenticate({
      ...authenticate,
      user: null,
      token: "",
    }),
      localStorage.removeItem("login_user");
    localStorage.removeItem("userId");
  };

  return (
    <>
      {authenticate.user ? (
        <>
          <li
            className={`font-poppins ss:text-black sm:text-dimWhite font-normal cursor-pointer ss:text-[16px] sm:text-[15px] hover:text-white hover:scale-125 transition-all ease-in sm:mr-10 py-1`}
            key="/myBlogs"
          >
            <NavLink to="/blog_Website/myBlogs">Blogs</NavLink>
          </li>
          <li
            className={`font-poppins ss:text-black sm:text-dimWhite font-normal cursor-pointer ss:text-[16px] sm:text-[15px] hover:text-white hover:scale-125 transition-all ease-in sm:mr-10 py-1`}
            key={`/user/${user_id}`}
          >
            <NavLink to={`/blog_Website/user/${user_id}`}>Profile</NavLink>
          </li>
          <li
            className={`font-poppins ss:text-black sm:text-dimWhite font-normal cursor-pointer ss:text-[16px] sm:text-[15px] hover:text-white hover:scale-125 transition-all ease-in ss:py-1`}
            key="/login"
          >
            <NavLink onClick={logout} to="/blog_Website/login">
              Log out
            </NavLink>
          </li>
        </>
      ) : (
        <>
          {visitersLinks.map((visitLink, index) => (
            <li
              className={`${styles.navLink} ${
                index === visitersLinks.length - 1 ? "py-1 mr-0" : "sm:mr-10"
              } hover:scale-125 transition-all ease-in ss:text-black`}
              key={visitLink.id}
            >
              <NavLink to={visitLink.id}>{visitLink.title}</NavLink>
            </li>
          ))}
        </>
      )}
    </>
  );
};

export default LoginLinks;
