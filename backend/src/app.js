import { config } from "dotenv";
config({ path: '.env' });
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from 'passport';
import {passportMiddleware} from './middlewares/passport.js';

const app = express()

// import routes
import Auth from './routes/Auth.js';
import Password from './routes/Password.js';
import CardExternal from './routes/CardExternal.js';
import UpdateProfile from './routes/UpdateProfile.js';
import Transference from './routes/Transference.js';
import Ingress from './routes/Ingress.js';
import Operations from './routes/Operations.js';

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
app.use('/api', Operations);

// export app
export default app;