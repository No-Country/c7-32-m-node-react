import { config } from "dotenv";
config({path: '.env'});
import express from "express";
import cors from "cors";
import morgan from "morgan";
import passport from 'passport';
import passportMidlewares from './middlewares/passport.js';


const app = express()

// import routes
import Auth from './routes/Auth.js';

// settings
app.set("PORT", process.env.PORT || 4000);

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(passport.initialize());
passport.use(passportMidlewares);


// routes
app.use('/api', Auth);

// export app

export default app;