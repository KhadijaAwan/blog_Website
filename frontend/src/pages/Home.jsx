import Layout from "../components/Layout";
import Hero from "./../components/Hero";
import { useAuthentication } from "../context";
import HomeBlogs from "../components/HomeBlogs";
import JoinSection from "../components/JoinSection";
import Vision from "../components/Vision";
import Honoured from "../components/Honoured";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <HomeBlogs />
      <Vision />
      <Honoured />
      <JoinSection />
    </Layout>
  );
};

export default Home;
