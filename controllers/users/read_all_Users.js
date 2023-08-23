import users_Model from "../../models/users_Model.js";

const read_all_Users = async (request, response) => {
  try {
    const users = await users_Model.find({}).select("-photo");
    if (users) {
      return response.status(200).send({
        success: true,
        total_users: users.length,
        message: "Total Users",
        users,
      });
    } else {
      return response.status(200).send({
        success: false,
        message: "Yet no user is registered.",
      });
    }
  } catch (error) {
    console.log(error);
    response.status(500).send({
      success: false,
      message: "All users fetching failed.",
      error,
    });
  }
};

export default read_all_Users;
