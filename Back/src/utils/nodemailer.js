import { createTransport } from 'nodemailer';

export const transporter = createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASSWORD
  }
});

export const options = {
  from: 'wenwallet.c7@gmail.com',
  to: '',
  subject: '',
  text: ''
};
