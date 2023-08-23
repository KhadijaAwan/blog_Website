import express from "express";
import signup_Controller from "../controllers/authentication/signup_controller.js";
import signin_Controller from "../controllers/authentication/signin_controller.js";

const router = express.Router();
router.post("/signup", signup_Controller);
router.post("/signin", signin_Controller);

export default router;
