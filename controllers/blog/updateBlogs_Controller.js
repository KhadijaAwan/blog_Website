import blogs_Model from "../../models/blogs_Model.js";
import fs from "fs";

const updateBlogs_Controller = async (request, response) => {
  try {
    const { title, description } = request.fields;
    const { photo } = request.files;

    if (photo.size > 1000000) {
      return res.status(500).send({ error: "photo should be less then 1mb" });
    }

    const blog = await blogs_Model.findByIdAndUpdate(
      request.params.id,
      { ...request.fields },
      { new: true }
    );
    if (photo) {
      blog.photo.data = fs.readFileSync(photo.path);
      blog.photo.contentType = photo.type;
    }
    await blog.save();

    return response.status(200).send({
      success: true,
      message: "Blog Updated Successfully.",
      blog,
    });
  } catch (error) {
    console.log(error);
    response.status(500).send({
      success: false,
      message: "Blog updation failed.",
      error,
    });
  }
};

export default updateBlogs_Controller;
