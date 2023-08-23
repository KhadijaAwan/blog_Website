import blogs_Model from "../../models/blogs_Model.js";

const readBlogs_Controller = async (request, response) => {
  try {
    const blogs = await blogs_Model.find({}).select("-photo").populate("user");
    if (blogs) {
      return response.status(200).send({
        success: true,
        total_blogs: blogs.length,
        message: "Total Blogs",
        blogs,
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
      message: "All blogs reading failed.",
      error,
    });
  }
};

export default readBlogs_Controller;
