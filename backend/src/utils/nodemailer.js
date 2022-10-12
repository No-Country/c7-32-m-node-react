import { createTransport } from 'nodemailer';

export const transporter = createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASSWORD
  }
});

export const mailOptions = (confirmationLink, email, option) => {
  const from = "Wen Wallet";

  if (option === 'renewpassword') {
    return {
      from,
      to: email,
      cc: process.env.NODEMAILER_USER,
      subject: 'Reinicio de contraseña',
      html: `<h3>Por favor, actualice su contraseña clickeando el siguiente enlace <a href="${confirmationLink}">Actualizar contraseña</a></h3><strong><i>Wen Wallet</i></strong>`
    }
  };

  if (option === 'activation') {
    return {
      from,
      to: email,
      cc: process.env.NODEMAILER_USER,
      subject: 'Confirmacion de cuenta',
      html: `<h3>Por favor, active su cuenta clickeando el siguiente enlace <a href="${confirmationLink}">ACTIVAR CUENTA</a></h3><strong><i>Wen Wallet</i></strong>`
    }
  };
 
};
