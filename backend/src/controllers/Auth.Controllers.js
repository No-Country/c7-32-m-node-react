// imports
import jwt from "jsonwebtoken";
import {generateToken} from '../utils/generateToken.js';
import { User } from "../models/Users.js";
import { comparePassword } from "../utils/encryptPassword.js";
import {OAuth2Client} from 'google-auth-library';

const client = new OAuth2Client(process.env.CLIENT_ID);


// LOGIN

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password || email.length === 0 || password.length === 0) {
    return res.status(400).json({ message: "Complete todos los campos" });
  }

  try {
    // check if the user exist
    const userFound = await User.findOne({ where: { email } });

    if (!userFound) {
      return res.status(400).json({ msg: `El mail no está registrado` });
    }

    // compare encrypt password
    const checkPassword = await comparePassword(password, userFound.password);

    if (!checkPassword) {
      return res.status(400).json({ msg: `Contraseña incorrecta` });
    }

    const token =  generateToken(userFound.id);

    res.json({ token, message: "¡Inicio de sesión exitoso!", user: userFound });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// LOGIN WITH GOOGLE

export const googleLogin = async (req, res) => {
  const {token} = req.body;

  try {
    // verify token of google
      const ticket = await client.verifyIdToken({
          idToken: token,
          audience: process.env.CLIENT_ID, 
      });
      const payload = ticket.getPayload();
      const userid = payload['sub'];

      // find if user exist in our DB
      const userFound = await User.findOne({ where: {email: payload.email }});

      // if exist logged
      if(userFound){

       const tokenGenerated = generateToken(userFound.id);

        res.json({token: tokenGenerated, message: "¡Inicio de sesión exitoso!", user: userFound});

      }

      // if doesn't exist sign in


      
    res.json('hola pa');
  } catch (error) {
    res.status(500).json({message: error});
  }

}