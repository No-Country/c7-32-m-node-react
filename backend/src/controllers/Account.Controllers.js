import Jwt from "jsonwebtoken";
import { User } from "../models/Users.js";
import { transporter, mailOptions } from "../utils/nodemailer.js";
import { encryptPassword } from "../utils/encryptPassword.js";

export const forgotPassword = async (req, res) => {
  try {
    let { email } = req.body;
    if (!email) return res.status(404).json({ message: 'Se necesita una dirección de correo electrónico' });

    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(403).json({ message: 'El usuario no se encuentra registrado' });

    const token = Jwt.sign({
      id: user.id,
      username: user.username,
      password: user.password
    },
      process.env.PASSWORD_TOKEN,
      { expiresIn: "30m" });

    const newPasswordLink = `${process.env.FRONT_URI}/reset/${token}`

    await User.update(
      {
        resetToken: token
      },
      {
        where: {
          email
        }
      }
    );

    transporter.sendMail(mailOptions(newPasswordLink, email, "renewpassword"));

    return res.status(200).json({ message: "Email enviado" });

  } catch (error) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
};

export const renewPassword = async(req, res) => {
  try {
    let { resetToken } = req.params;
    let newPassword = req.body.password;

    if (!resetToken) return res.status(403).json({ message: "No se recibió el Token, solicite otro link de verificación" });
    if (!newPassword) return res.status(403).json({ message: "No se recibió la nueva clave" });

    // Encrypt new password received.
    const encryptedPass = await encryptPassword(newPassword);
    // Check token / verify id 
    const decodedToken = jwt.verify(resetToken, process.env.PASSWORD_TOKEN);
    const user = await User.findOne({ where: { id: decodedToken.id} });

    if (!user) return res.status(404).json({ message: "No se encontró el usuario, por favor intente nuevamente" });
    
    if (resetToken != user.resetToken) return res.status(401).json({ message: "Este link ya fue utilizado" });

    // Remove resetToken from user
    await User.update({
      resetToken: null
    },
    {
      where: {
        id: user.id
      }
    }
    );

    // Set new user password
    await User.update({
      password: encryptPassword
    },
    {
      whre: {
        id: user.id
      }
    });

    return res.status(200).json({ message: "Password actualizada" });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ message: err });
  }
};
