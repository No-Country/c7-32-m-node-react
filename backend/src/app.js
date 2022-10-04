import { config } from "dotenv";
config({ path: '.env' });
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from 'passport';
import passportMiddlewares from './middlewares/passport.js';

const app = express()

// import routes
import Auth from './routes/Auth.js';
import Password from './routes/Password.js';
import CardExternal from './routes/CardExternal.js';

// settings
app.set("PORT", process.env.PORT || 4000);

// middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
passport.use(passportMiddlewares);

// routes
app.use('/api', Auth);
app.use('/api/password', Password);
app.use('api/card', CardExternal);

// export app
export default app;
