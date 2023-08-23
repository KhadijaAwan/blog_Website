import express from "express";
import formidable from "express-formidable";
import read_all_Users from "../controllers/users/read_all_Users.js";
import updateUser from "../controllers/users/updateUser.js";
import viewUserDetails from "../controllers/users/viewUserDetails.js";
import readUserPhoto from "../controllers/users/readUserPhoto.js";

const router = express.Router();
router.get("/readUsers", read_all_Users);
router.get("/userDetails/:id", viewUserDetails);
router.get("/readUserPhoto/:id", readUserPhoto);
router.put("/updateUser/:id", formidable(), updateUser);

export default router;
