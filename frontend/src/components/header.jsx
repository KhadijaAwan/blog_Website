import styles from "../style";
import Nav from "./nav";

const Header = () => {
  return (
    <header className={`${styles.paddingX} ${styles.flexCenter} bg-sky-950`}>
      <div className={`${styles.boxWidth}`}>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
