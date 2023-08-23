import users_Model from "../../models/users_Model.js";
import JWT from "jsonwebtoken";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "khadija10750@gmail.com",
    pass: "awan@$123",
  },
});

const passwordLink = async (request, response) => {
  try {
    const { email } = request.fields;

    if (!email) {
      response.status(203).send({
        success: false,
        message: "Email is required",
      });
    } else {
      response.status(200).send({
        success: true,
        message: "Email send",
      });
    }

    const getUser = await users_Model.findOne({ email: email });
    const token = JWT.sign({ _id: getUser._id }, process.env.JWT_CODE, {
      expiresIn: "180s",
    });

    const userToken = await users_Model.findByIdAndUpdate(
      { _id: getUser._id },
      { verifyToken: token },
      { new: true }
    );

    if (userToken) {
      const mail = {
        from: "khadija10750@gmail.com",
        to: email,
        subject: "Link to Reset Password in Bloggeria",
        text: `Link is valid for 3 minutes http://localhost:5173/forgotPassword/${getUser._id}/${userToken.verifyToken}`,
      };

      transporter.sendMail(mail, (error, info) => {
        if (error) {
          console.log("error", error);
          response
            .status(401)
            .send({ success: false, message: "Email send failed" });
        } else {
          console.log("Email sent", info.response);
          response
            .status(201)
            .send({ success: true, message: "Email sent Successfully" });
        }
      });
    } else {
      response.status(401).send({ success: false, message: "Invalid Email" });
    }
  } catch (error) {
    console.log(error);
    response.status(500).send({
      success: false,
      message: "Email sending link failed",
      error,
    });
  }
};
export default passwordLink;
