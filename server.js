import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import { connect } from "./config/connect.js";
import authentication from "./routes/authentication.js";
import users from "./routes/users.js";
import blog from "./routes/blogs.js";

const app = express();
dotenv.config();

connect();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/api/v1/authentication", authentication);
app.use("/api/v1/users", users);
app.use("/api/v1/blog", blog);

app.listen(process.env.PORT, () => {
  console.log(`Website running`.bgGreen.white);
});
