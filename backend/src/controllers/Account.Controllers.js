import Jwt from "jsonwebtoken";
import { User } from "../models/Users.js";
import { Transfers } from "../models/Transfers.js";
import { transporter, mailOptions } from "../utils/nodemailer.js";
import { encryptPassword } from "../utils/encryptPassword.js";
import cloudinary from '../utils/cloudinary.js';

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

    res.status(200).json({ message: "Email enviado" });

  } catch (error) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
};

export const renewPassword = async (req, res) => {
  try {
    let { resetToken } = req.params;
    let newPassword = req.body.password;

    if (!resetToken) return res.status(403).json({ message: "No se recibió el Token, solicite otro link de verificación" });
    if (!newPassword) return res.status(403).json({ message: "No se recibió la nueva clave" });

    // Encrypt new password received.
    const encryptedPass = await encryptPassword(newPassword);
    // Check token / verify id 
    const decodedToken = jwt.verify(resetToken, process.env.PASSWORD_TOKEN);
    const user = await User.findOne({ where: { id: decodedToken.id } });

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
    res.status(400).json({ message: err });
  }
};

export const updateProfile = async (req, res) => {
  try {
    // const { id, field, value } = req.body;
    const { id, data } = req.body;

    if (id === undefined || id === '' || id === null) res.status(400).json({ message: "Se necesita un id" });
    // MAKE VALIDATIONS FOR EMPTY KEY VALUES
    if (data === undefined || Object.keys(data).length === 0 || data === null) res.status(400).json({ message: "Se necesita un valor" });

    await User.update(data,
      {
        where: {
          id: id
        }
      });

    res.status(200).json({ message: "Perfil actualizado" });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ message: err.message });
  };
};

export const operationsHistory = async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) res.status(400).json({ message: "Id requerido" });

    const ingresos = await Transfers.findAll({
      where: {
        user_id: id
      }
    });
    const egresos = await Transfers.findAll({
      where: {
        user_transferring_id: id
      }
    });

    res.status(200).json({
      ingresos,
      egresos
    })
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ message: err.message });
  };
};

export const uploadProfileImage = async (req, res) => {
  try {
    const { email } = req.body;
    if (!req.file) {
      return res.status(400).send("Por favor seleccione una imagen para subir");
    }

    const cloudinary_image = await cloudinary.uploader(req.file.path, {
      folder: "profileImages"
    });

    const profileImage = await User.update({
      image: cloudinary_image.secure_url
    }, {
      where: {
        email: email
      }
    });

    res.status(200).json({ message: "Foto de perfial actualizada", profileImage })

  } catch (err) {
    console.log(err.message);
    res.status(400).json({ message: err.message });
  }
};
