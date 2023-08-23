import styles from "../style";

const Button = ({ title, style, condition }) => {
  return (
    <button
      type="submit"
      onClick={condition}
      className={`${styles.btn} ${style} hover:scale-110 py-4 px-6`}
    >
      {title}
    </button>
  );
};

export default Button;
