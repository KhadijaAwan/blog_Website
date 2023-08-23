import users_Model from "../../models/users_Model.js";
import { compare_password } from "../../utils/password_Hashing.js";
import JWT from "jsonwebtoken";

const signin_Controller = async (request, response) => {
  try {
    const { email, password } = request.body;

    // verify whether user have entered email
    if (!email) {
      return response
        .status(404)
        .send({ success: false, message: "Please Enter Your Email" });
    }

    // verify whether user have entered password
    if (!password) {
      return response
        .status(404)
        .send({ success: false, message: "Please Enter Your Password" });
    }

    // verify whether user has created an account or not
    const user = await users_Model.findOne({ email });
    if (!user) {
      return response
        .status(200)
        .send({ success: false, message: "Invalid Email" });
    }

    // verify whether user has entered correct password or not
    const check_password = await compare_password(password, user.password);
    if (!check_password) {
      return response
        .status(200)
        .send({ success: false, message: "Invalid Password" });
    }

    // Token creation and saving new user details
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_CODE, {
      expiresIn: "6d",
    });
    response.status(200).send({
      success: true,
      message: "User Login Successfully!",
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    response.status(500).send({
      success: false,
      message: "User Login failed.",
      error,
    });
  }
};

export default signin_Controller;
