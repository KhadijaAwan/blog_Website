import mongoose from "mongoose";

const blogs_Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    description: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("blogs", blogs_Schema);
