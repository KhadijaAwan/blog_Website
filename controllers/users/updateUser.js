import users_Model from "../../models/users_Model.js";
import { password_hashing } from "../../utils/password_Hashing.js";
import fs from "fs";

const updateUser = async (request, response) => {
  try {
    let { username, email, password, role, company } = request.fields;
    console.log(request.params.id);
    const { photo } = request.files;

    // encoding the new user password
    const hashed_password = await password_hashing(password);
    if (photo.size > 1000000) {
      return res.status(500).send({ error: "photo should be less then 1mb" });
    }

    const user = await users_Model.findByIdAndUpdate(
      request.params.id,
      {
        username: username,
        email: email,
        role: role,
        company: company,
        password: hashed_password,
      },
      { new: true }
    );
    if (photo) {
      user.photo.data = fs.readFileSync(photo.path);
      user.photo.contentType = photo.type;
    }
    await user.save();

    return response.status(200).send({
      success: true,
      message: "User Profile Updated Successfully.",
      user,
    });
  } catch (error) {
    console.log(error);
    response.status(500).send({
      success: false,
      message: "User Profile updation failed.",
      error,
    });
  }
};
export default updateUser;
