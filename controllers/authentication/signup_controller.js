import users_Model from "../../models/users_Model.js";
import { password_hashing } from "../../utils/password_Hashing.js";

// controller to handle the user account creation process

const signup_Controller = async (request, response) => {
  try {
    const { username, email, password } = request.body;

    const pass = password;

    // verify whether user have entered all details
    if (!username) return response.send({ message: "Please Enter Username" });

    if (!email) return response.send({ message: "Please Enter Email" });

    if (!password) return response.send({ message: "Please Enter Password" });

    // verifying whether the same email account is already present
    const user_Exists = await users_Model.findOne({ email });
    if (user_Exists) {
      return response
        .status(200)
        .send({ success: false, message: "Already account available." });
    }

    // encoding the new user password
    const hashed_password = await password_hashing(password);

    //   passing details to create new user
    const user = await new users_Model({
      username,
      email,
      password: hashed_password,
    }).save();

    response.status(201).send({
      success: true,
      message: "User Account Created Successfully.",
      user,
    });

    //   to handle the errors occured during user creation
  } catch (error) {
    console.log(error);
    response.status(500).send({
      success: false,
      message: "User account creation failed.",
      error,
    });
  }
};

export default signup_Controller;
