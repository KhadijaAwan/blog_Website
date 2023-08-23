import Layout from "../components/Layout";
import styles, { layout } from "../style";
import { logo } from "../assets/index";
import Links from "./../components/Links";

const Blog = () => {
  return (
    <Layout>
      <section className={`${layout.section} ${styles.padding} bg-purple-100`}>
        <div className={`${layout.sectionImg}`}>
          <img src={logo} alt="blog-image" className="p-4 pr-6 rounded-lg" />
        </div>

        <div className={`${layout.sectionInfo} bg-gray-500`}>
          <h1 className={`${styles.sectionHeading}`}>My First Post</h1>
          <p className={`${styles.paragraph} max-w-[510px] my-5`}>
            How much money do you leave on the table each month? Too many
            businesses “forget” to bill all hours worked. With HooBank, you can
            keep track of any invoices, generate them more quickly and bill any
            type of pricing structure to meet clients’ needs. As a bonus, you
            can explore new pricing models and compare their viability. Stop the
            revenue leakage and scale your business at full speed! Cash is king,
            so get it in the bank sooner!
          </p>

          <div className={`${layout.sectionLinks}`}>
            <Links style={`w-[140px] p-5 text-[16px] text-center`} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
