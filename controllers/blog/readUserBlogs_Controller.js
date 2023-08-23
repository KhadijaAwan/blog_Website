import users_Model from "../../models/users_Model.js";

const readUserBlogs_Controller = async (request, response) => {
  try {
    const user_blogs = await users_Model
      .findById(request.params.id)
      .populate("blogs");
    if (user_blogs) {
      return response.status(200).send({
        success: true,
        total_user_blogs: user_blogs.length,
        message: "Total User Blogs",
        user_blogs,
      });
    } else {
      return response.status(200).send({
        success: false,
        message: "Yet no blog is posted.",
      });
    }
  } catch (error) {
    console.log(error);
    response.status(500).send({
      success: false,
      message: "User blogs reading failed.",
      error,
    });
  }
};

export default readUserBlogs_Controller;
