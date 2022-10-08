// imports
import { generateToken } from '../utils/generateToken.js';
import { User } from "../models/Users.js";
import { createCard } from '../utils/generateCard.js';
import { cbu } from '../utils/generateCbu.js';
import { comparePassword } from "../utils/encryptPassword.js";
import { OAuth2Client } from 'google-auth-library';

const client = new OAuth2Client(process.env.CLIENT_ID);


// LOGIN
export const login = async (req, res) => {


  try {
    const { email, password, remember } = req.body;

    if (!email || !password || email.length === 0 || password.length === 0) return res.status(400).json({ message: "Complete todos los campos" });

    // check if the user exist
    const userFound = await User.findOne({ where: { email } });
    if (!userFound) return res.status(400).json({ message: `El mail no está registrado` });

    // compare encrypt password
    const checkPassword = await comparePassword(password, userFound.password);

    if (!checkPassword) return res.status(400).json({ message: `Contraseña incorrecta` });

    if (remember) {
      const token = generateToken(userFound.id, remember);
      res.json({ token, message: "¡Inicio de sesión exitoso!", user: userFound });
    } else {
      const token = generateToken(userFound.id, false);
      res.json({ token, message: "¡Inicio de sesión exitoso!", user: userFound });
    }

    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// LOGIN WITH GOOGLE
export const googleLogin = async (req, res) => {
  const { token } = req.body;console.log(token)

  try {
    // verify token of google
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const userid = payload['sub'];

    // find if user exist in our DB
    const userFound = await User.findOne({ where: { email: payload.email } });

    // if exist logged
    if (userFound) {

      const tokenGenerated = generateToken(userFound.id, false);

      return res.json({ token: tokenGenerated, message: "¡Inicio de sesión exitoso!", user: userFound });

    }

    // if doesn't exist sign in

    if(!payload.family_name) {
      console.log('noooo')
      const newUser = await User.create({
        name: payload.given_name,
        surname: 'wallet' ,
        email: payload.email,
        image: payload.picture,
        password: ' '
      });
    } else {
      console.log('seeee')
      const newUser = await User.create({
        name: payload.given_name,
        surname: payload.family_name ,
        email: payload.email,
        image: payload.picture,
        password: ' '
      });
    }
    
    
    const cardUser = await createCard(newUser.id, newUser.name , newUser.surname);

    const userUpdated = await User.update({
      card_id: cardUser.id
    }, {
      where: {
        id: newUser.id
      }
    })

    const tokenGenerated = generateToken(newUser.id, false);

    res.json({ token: tokenGenerated, message: "¡Inicio de sesión exitoso!", user: userUpdated  });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
