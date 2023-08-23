import blogs_Model from "../../models/blogs_Model.js";

const view_individualBlog_Controller = async (request, response) => {
  try {
    const { id } = request.params;
    const blog = await blogs_Model.findById(id);

    if (blog) {
      return response.status(200).send({
        success: true,
        message: "Your Requested Blog",
        blog,
      });
    } else {
      return response.status(404).send({
        success: false,
        message: "No Blog is present with this id.",
      });
    }
  } catch (error) {
    console.log(error);
    response.status(500).send({
      success: false,
      message: "Blog access failed.",
      error,
    });
  }
};

export default view_individualBlog_Controller;
