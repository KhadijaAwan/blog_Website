import Layout from "../components/Layout";
import styles from "../style";

const Missing = () => {
  return (
    <Layout>
      <section className={`${styles.section}`}>
        <h1 className={`${styles.heading2} text-center text-blue-950 py-5`}>
          Page not Found
        </h1>
      </section>
    </Layout>
  );
};

export default Missing;
