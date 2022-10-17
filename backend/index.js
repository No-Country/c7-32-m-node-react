import { config } from "dotenv";
config({ path: '.env' });
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from 'passport';
import { passportMiddleware } from './src/middlewares/passport.js';
import Main from './src/app.js';

const app = express()

// import routes
import Auth from './src/routes/Auth.js';
import Password from './src/routes/Password.js';
import CardExternal from './src/routes/CardExternal.js';
import UpdateProfile from './src/routes/UpdateProfile.js';
import Transference from './src/routes/Transference.js';
import Ingress from './src/routes/Ingress.js';

// settings
app.set("PORT", process.env.PORT || 4000);

// middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
passport.use(passportMiddleware);

// routes
app.use('/api', Auth);
app.use('/api/password', Password);
app.use('/api/card', CardExternal);
app.use('/api/profile', UpdateProfile);
app.use('/api', Transference);
app.use('/api', Ingress);

// server
Main();

// export app
export default app;
