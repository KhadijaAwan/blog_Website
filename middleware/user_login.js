import { JWT } from "jsonwebtoken";

export const login_required = async (request, response, next) => {
  try {
    const decrypt = JWT.verify(
      request.headers.authorization,
      process.env.JWT_CODE
    );
    request.user = decrypt;
    next();
  } catch (error) {
    console.log(error);
  }
};
