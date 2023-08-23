import Layout from "../components/Layout";
import Button from "./../components/Button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { port_no } from "../port";
import styles from "./../style";

const UserProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [userPhoto, setUserPhoto] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const userData = async () => {
    try {
      const { data } = await axios.get(
        `${port_no}/api/v1/users/userDetails/${id}`
      );
      setName(data.user_details.username);
      setEmail(data.user_details.email);
      setPassword(data.user_details.password);
      setRole(data.user_details.role || "Content Writer");
      setCompany(data.user_details.company || "xyz");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userData();
  }, []);

  const userDetails_UpdateFunction = async (e) => {
    e.preventDefault();
    try {
      const updatedDetails = new FormData();
      updatedDetails.append("username", name);
      updatedDetails.append("email", email);
      updatedDetails.append("password", password);
      updatedDetails.append("role", role);
      updatedDetails.append("company", company);
      userPhoto && updatedDetails.append("photo", userPhoto);
      updatedDetails.append("user", id);
      const { data } = await axios.put(
        `${port_no}/api/v1/users/updateUser/${id}`,
        updatedDetails
      );
      if (data?.success) {
        alert("User Details Updated Successfully");
        navigate("/blog_Website/");
      } else {
        alert(data?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <section className="bg-purple-100 p-4 pt-6 pb-16">
        <h1 className={`${styles.heading2} text-center text-blue-950 mb-4`}>
          User Profile
        </h1>
        <div className="flex justify-center items-center p-2">
          <form
            onSubmit={userDetails_UpdateFunction}
            className="flex flex-col p-3 sm:p-5 bg-slate-200 rounded-lg max-w-[330px] sm:min-w-[600px] mx-auto"
          >
            <input
              type="file"
              accept="images/*"
              className={`${styles.formInput} h-[55px] sm:w-[550px] ${styles.btn} mx-auto`}
              onChange={(e) => setUserPhoto(e.target.files[0])}
            />
            <div className="flex justify-center mt-2 mb-5">
              <img
                src={
                  userPhoto
                    ? URL.createObjectURL(userPhoto)
                    : `${port_no}/api/v1/users/readUserPhoto/${id}`
                }
                alt="blog-image"
                className="w-[130px] h-[130px] rounded-full"
              />
            </div>

            <label className="relative cursor-pointer">
              <div className={`${styles.inputBorder} min-w-[125px]`}></div>
              <input
                type="text"
                placeholder="Input"
                value={name}
                className={`${styles.formInput} sm:w-[550px]`}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <span className={`${styles.inputSpan}`}>Enter Username</span>
            </label>

            <label className="relative cursor-pointer">
              <div className={`${styles.inputBorder} min-w-[125px]`}></div>
              <input
                type="text"
                placeholder="Input"
                value={email}
                className={`${styles.formInput} sm:w-[550px]`}
                disabled
              />
              <span className={`${styles.inputSpan}`}>Enter Email</span>
            </label>

            <label className="relative cursor-pointer">
              <div className={`${styles.inputBorder} min-w-[125px]`}></div>
              <input
                type="text"
                placeholder="Input"
                value={password}
                className={`${styles.formInput} sm:w-[550px]`}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className={`${styles.inputSpan}`}>Enter Password</span>
            </label>

            <label className="relative cursor-pointer">
              <div className={`${styles.inputBorder} min-w-[100px]`}></div>
              <input
                type="text"
                placeholder="Input"
                value={role}
                className={`${styles.formInput} sm:w-[550px]`}
                onChange={(e) => setRole(e.target.value)}
                required
              />
              <span className={`${styles.inputSpan}`}>Enter Role</span>
            </label>

            <label className="relative cursor-pointer">
              <div className={`${styles.inputBorder} min-w-[170px]`}></div>
              <input
                type="text"
                placeholder="Input"
                value={company}
                className={`${styles.formInput} sm:w-[550px]`}
                onChange={(e) => setCompany(e.target.value)}
                required
              />
              <span className={`${styles.inputSpan}`}>Enter Company Name</span>
            </label>

            <Button title="Update" style={"mt-3 w-[130px] mx-auto"} />
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default UserProfile;
