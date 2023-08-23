import blogs_Model from "../../models/blogs_Model.js";

const readPhoto_Controller = async (request, response) => {
  try {
    const blog = await blogs_Model.findById(request.params.id).select("photo");
    if (blog.photo.data) {
      response.set("Content-type", blog.photo.contentType);
      return response.status(200).send(blog.photo.data);
    }
  } catch (error) {
    console.log(error);
    response.status(500).send({
      success: false,
      message: "Blog Photo loading failed.",
      error,
    });
  }
};

export default readPhoto_Controller;
