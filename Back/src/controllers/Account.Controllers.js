import { Jwt } from "jsonwebtoken";
import { User } from "../models/Users.js";
import { transporter, mailOptions } from "../utils/nodemailer.js";

export const forgotPassword = async (req, res) => {
  try {
    let { email } = req.body;
    if (!email) return res.status(404).json({ message: 'Se necesita una dirección de correo electrónico'});

    const user = await User.findOne({where:  {email} });
    if (!user) return res.status(403).json({ message: 'El usuario no se encuentra registrado'});

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
