import { useState } from "react";
import { logo, close, menu } from "../assets/index";
import { navLinks } from "../constants/tags";
import { NavLink } from "react-router-dom";
import LoginLinks from "./loginLinks";
import styles from "../style";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between py-6 relative">
      {/* navbar Logo Image  */}
      <div className="bg-white w-[140px] p-1 rounded-lg">
        <img src={logo} alt="Blogger_logo" className="w-[120px] h-[32px]" />
      </div>

      {/* navbar icons for the laptop and tablets section */}
      <ul className="list-none sm:flex justify-end hidden items-center flex-1">
        {navLinks.map((nav) => (
          <li
            className={`${styles.navLink} mr-10 hover:scale-125 transition-all ease-in`}
            key={nav.id}
          >
            <NavLink to={nav.id}>{nav.title}</NavLink>
          </li>
        ))}

        <LoginLinks />
      </ul>

      {/* navbar menu for mobiles section */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        {/* setting the toggle icon  */}
        <img
          src={toggle ? close : menu}
          alt="mobile-menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-5 bg-black-gradient absolute top-20 right-0 min-w-[140px] rounded-xl mr-0 my-2 sidebar bg-amber-400 z-50`}
        >
          <ul className="list-none flex justify-end items-center flex-1 flex-col px-3">
            {navLinks.map((nav, index) => (
              <li
                className={`font-poppins font-normal cursor-pointer text-black text-[16px] hover:text-white hover:scale-125 transition-all ease-in sm:mb-0 py-1`}
                key={nav.id}
              >
                <NavLink to={nav.id}>{nav.title}</NavLink>
              </li>
            ))}

            <LoginLinks />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
