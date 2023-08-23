import Layout from "../components/Layout";
import Button from "./../components/Button";
import styles from "../style";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { port_no } from "../port";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const Credentials_Submit_Function = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${port_no}/api/v1/authentication/signup`,
        {
          username,
          email,
          password,
        }
      );
      response.data.success
        ? navigate("/blog_Website/login")
        : console.log("Signup Failed");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <section className="bg-purple-100 p-4">
        <h1 className={`${styles.heading2} text-center text-blue-950`}>
          Sign Up
        </h1>
        <div className="flex justify-center items-center p-2">
          <form
            onSubmit={Credentials_Submit_Function}
            className="flex flex-col p-3 sm:p-5 bg-slate-200 rounded-lg max-w-[330px] sm:max-w-[500px]"
          >
            <label className="relative cursor-pointer">
              <div className={`${styles.inputBorder} min-w-[125px]`}></div>
              <input
                type="text"
                placeholder="Input"
                value={username}
                className={`${styles.formInput}`}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <span className={`${styles.inputSpan}`}>Enter Username</span>
            </label>

            <label className="relative cursor-pointer">
              <div className={`${styles.inputBorder} min-w-[100px]`}></div>
              <input
                type="text"
                placeholder="Input"
                value={email}
                className={`${styles.formInput}`}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <span className={`${styles.inputSpan}`}>Enter Email</span>
            </label>

            <label className="relative cursor-pointer">
              <div className={`${styles.inputBorder} min-w-[120px]`}></div>
              <input
                type="text"
                placeholder="Input"
                value={password}
                className={`${styles.formInput}`}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className={`${styles.inputSpan}`}>Enter Password</span>
            </label>

            <Button title="Sign Up" style={"mt-6 mx-auto w-[130px]"} />
            <p className="text-gray-600 mx-auto mt-6 font-poppins">
              Already have an account?
              <Link
                to="/blog_Website/login"
                className="pl-2 text-blue-950 font-medium"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Register;
