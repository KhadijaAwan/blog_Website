import Layout from "../components/Layout";
import Button from "./../components/Button";
import styles from "../style";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { port_no } from "../port";
import { useAuthentication } from "../context";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [authenticate, setAuthenticate] = useAuthentication();

  const Login_Function = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${port_no}/api/v1/authentication/signin`,
        {
          email,
          password,
        }
      );
      response.data.success
        ? (setAuthenticate({
            ...authenticate,
            user: response.data.user,
            token: response.data.token,
          }),
          localStorage.setItem("login_user", JSON.stringify(response.data)),
          localStorage.setItem("userId", response.data.user._id),
          toast.success("Login Successfully!"),
          navigate("/blog_Website/"))
        : toast.error(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <section className="bg-purple-100 p-4">
        <h1 className={`${styles.heading2} text-center text-blue-950`}>
          Sign In
        </h1>

        <div className="flex justify-center items-center p-3">
          <form
            onSubmit={Login_Function}
            className="flex flex-col p-3 sm:p-5 bg-slate-200 rounded-lg max-w-[330px] sm:max-w-[500px]"
          >
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

            <Button title="Sign In" style={"mt-6 mx-auto w-[130px]"} />
            <p className="text-gray-500 mx-auto mt-6 font-poppins">
              Don't have an account?
              <Link
                to="/blog_Website/register"
                className="pl-2 text-gray-700 font-medium"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
