import jwt from "jsonwebtoken";


export const generateToken = (id, remember) => {
    if(remember){
      return jwt.sign({ id: id }, process.env.PASSWORD_TOKEN, {
        expiresIn: 60 * 60 * 730, // 24 hours
      });
    } else {
      return jwt.sign({ id: id }, process.env.PASSWORD_TOKEN, {
        expiresIn: 60 * 60 * 24, // 24 hours
      });
    }
   
}