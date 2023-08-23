import blogs_Model from "../../models/blogs_Model.js";

const deleteBlogs_Controller = async (request, response) => {
  try {
    const remove_blog = await blogs_Model
      .findByIdAndDelete(request.params.id)
      .populate("user");
    await remove_blog.user.blogs.pull(remove_blog);
    await remove_blog.user.save();

    return response.status(200).send({
      success: true,
      message: "Blog deleted Successfully.",
    });
  } catch (error) {
    console.log(error);
    response.status(500).send({
      success: false,
      message: "Blog Removal Failed.",
      error,
    });
  }
};

export default deleteBlogs_Controller;
