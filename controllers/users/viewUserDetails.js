import users_Model from "../../models/users_Model.js";

const viewUserDetails = async (request, response) => {
  try {
    const user_details = await users_Model.findById(request.params.id);
    console.log(request.params.id);
    if (user_details) {
      return response.status(200).send({
        success: true,
        total_user_blogs: user_details.length,
        message: "User Details",
        user_details,
      });
    } else {
      return response.status(200).send({
        success: false,
        message: "Yet no user detail is posted.",
      });
    }
  } catch (error) {
    console.log(error);
    response.status(500).send({
      success: false,
      message: "User Details reading failed.",
      error,
    });
  }
};

export default viewUserDetails;
