import jwt from "jsonwebtoken";


export const generateToken = (id) => {
    jwt.sign({ id: id }, process.env.PASSWORD_TOKEN, {
        expiresIn: 60 * 60 * 24, // 24 hours
      });
}