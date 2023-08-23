import mongoose from "mongoose";
import blogs_Model from "../../models/blogs_Model.js";
import users_Model from "../../models/users_Model.js";
import fs from "fs";

const createBlogs_Controller = async (request, response) => {
  try {
    const { title, description, user } = request.fields;
    const { photo } = request.files;

    // verify whether user have entered all details
    if (!title) return response.send({ message: "Please Enter blog title" });

    if (!photo) return response.send({ message: "Please Enter blog photo" });

    if (photo.size > 1000000) {
      return res.status(500).send({ error: "photo should be less then 1mb" });
    }

    if (!description)
      return response.send({ message: "Please Enter blog description" });

    if (!user) return response.send({ message: "Please Enter blog user" });

    const user_present = await users_Model.findById(user);

    if (!user_present) {
      return response.status(404).send({
        success: false,
        message: "User not find.",
      });
    }

    //   passing details to create new blog
    const blog = new blogs_Model({ ...request.fields });
    if (photo) {
      blog.photo.data = fs.readFileSync(photo.path);
      blog.photo.contentType = photo.Type;
    }
    const session = await mongoose.startSession();
    session.startTransaction();
    await blog.save({ session });
    user_present.blogs.push(blog);
    await user_present.save({ session });
    await session.commitTransaction();
    await blog.save();

    return response.status(201).send({
      success: true,
      message: "Blog Created Successfully.",
      blog,
    });
  } catch (error) {
    console.log(error);
    response.status(500).send({
      success: false,
      message: "Blog Creation Failed",
      error,
    });
  }
};

export default createBlogs_Controller;
