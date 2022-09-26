// imports
import jwt from "jsonwebtoken";
import {User} from '../models/Users.js';
import { comparePassword } from "../utils/encryptPassword.js";

// LOGIN

export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password || email.length === 0 || password.length === 0) {
      return res.status(400).json({ message: "Complete todos los campos" });
    }
  
    const userFound = await User.findOne({ where: { email } });
  
    if (!userFound) {
      return res.status(400).json({ msg: `El mail no está registrado` });
    }
  
    const checkPassword = await comparePassword(password, userFound.password);
  
    if (!checkPassword) {
      return res.status(400).json({ msg: `Contraseña incorrecta` });
    }
  
    const token = jwt.sign({ id: userFound.id }, process.env.PASSWORD_TOKEN, {
      expiresIn: 60 * 60 * 24, // 24 hours
    });
  
    res.json({token, message: "Logged correctly " });
}