import { config } from "dotenv";
config({ path: '.env' });
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from 'passport';
import { passportMiddleware } from './middlewares/passport.js';
import Main from './app.js';

<<<<<<< HEAD
const app = express()
=======
// import models
import './models/Users.js';
import { User } from './models/Users.js';
import './models/Cards.js';
import './models/Ingreso.js';
import './models/Egresos.js';
>>>>>>> IM_BK_wallet

// import routes
import Auth from './routes/Auth.js';
import Password from './routes/Password.js';
import CardExternal from './routes/CardExternal.js';
import UpdateProfile from './routes/UpdateProfile.js';
import Transference from './routes/Transference.js';
import Ingress from './routes/Ingress.js';

<<<<<<< HEAD
// settings
app.set("PORT", process.env.PORT || 4000);
=======
const Main = async () => {
  try {
      await sequelize.sync({ force: false });
    console.log("Connection has been established successfully.");
    app.listen(app.get("PORT"));
    console.log(`Server listening on port ${app.get("PORT")}`);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
>>>>>>> IM_BK_wallet

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
