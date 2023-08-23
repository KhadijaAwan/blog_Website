import express from "express";
import readBlogs_Controller from "./../controllers/blog/readBlogs_Controller.js";
import createBlogs_Controller from "./../controllers/blog/createBlogs_Controller.js";
import updateBlogs_Controller from "./../controllers/blog/updateBlogs_Controller.js";
import deleteBlogs_Controller from "./../controllers/blog/deleteBlogs_Controller.js";
import view_individualBlog_Controller from "./../controllers/blog/view_individualBlog_Controller.js";
import readUserBlogs_Controller from "./../controllers/blog/readUserBlogs_Controller.js";
import readPhoto_Controller from "../controllers/blog/readPhoto_Controller.js";
import formidable from "express-formidable";

const router = express.Router();
router.get("/readBlogs", readBlogs_Controller);
router.get("/readBlogPhoto/:id", readPhoto_Controller);
router.post("/createBlog", formidable(), createBlogs_Controller);
router.get("/viewBlog/:id", view_individualBlog_Controller);
router.get("/viewUserBlog/:id", readUserBlogs_Controller);
router.put("/updateBlog/:id", formidable(), updateBlogs_Controller);
router.delete("/deleteBlogs/:id", deleteBlogs_Controller);

export default router;
