import mongoose from "mongoose";

const users_Schema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    photo: { data: Buffer, contentType: String },
    role: { type: String, trim: true },
    company: { type: String, trim: true },
    blogs: [
      {
        type: mongoose.Types.ObjectId,
        ref: "blogs",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("users", users_Schema);
