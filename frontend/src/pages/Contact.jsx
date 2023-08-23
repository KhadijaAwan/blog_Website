import Layout from "../components/Layout";
import Button from "./../components/Button";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./../style";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [visitorName, setVisitorName] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xj96g4p",
        "template_m0mbtpk",
        form.current,
        "700tTq0l8bSjojL4u"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Layout>
      <section className="bg-purple-100 p-4 pt-6 pb-16">
        <h1 className={`${styles.heading2} text-center text-blue-950 mb-3`}>
          Contact Us
        </h1>
        <div className="flex flex-col justify-center items-center p-2">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col p-3 mb-5 sm:p-5 bg-slate-200 rounded-lg max-w-[330px] sm:min-w-[600px] mx-auto"
          >
            <label className="relative cursor-pointer">
              <div className={`${styles.inputBorder} min-w-[134px]`}></div>
              <input
                type="text"
                placeholder="Input"
                name="visitorName"
                className={`${styles.formInput} sm:w-[550px]`}
                onChange={(e) => setVisitorName(e.target.value)}
                required
              />
              <span className={`${styles.inputSpan}`}>Enter Your Name</span>
            </label>

            <label className="relative cursor-pointer">
              <div className={`${styles.inputBorder} min-w-[134px]`}></div>
              <input
                type="text"
                placeholder="Input"
                name="email"
                className={`${styles.formInput} sm:w-[550px]`}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <span className={`${styles.inputSpan}`}>Enter Your Email</span>
            </label>

            <label className="relative cursor-pointer">
              <div className={`${styles.inputBorder} min-w-[155px]`}></div>
              <textarea
                placeholder="Input"
                className={`${styles.formInput} outline-none min-h-[120px] resize-none sm:w-[550px]`}
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <span className={`${styles.inputSpan}`}>Enter Your Message</span>
            </label>
          </form>

          <Link to="/blog_Website/">
            <Button title="Send" styles={"w-[140px]"} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
