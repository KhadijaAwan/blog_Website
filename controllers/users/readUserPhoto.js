import users_Model from "../../models/users_Model.js";

const readUserPhoto = async (request, response) => {
  try {
    const user = await users_Model.findById(request.params.id).select("photo");
    if (user.photo.data) {
      response.set("Content-type", user.photo.contentType);
      return response.status(200).send(user.photo.data);
    }
  } catch (error) {
    console.log(error);
    response.status(500).send({
      success: false,
      message: "User Photo loading failed.",
      error,
    });
  }
};

export default readUserPhoto;
