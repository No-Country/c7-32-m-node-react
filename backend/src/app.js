<<<<<<< HEAD
import { config } from "dotenv";
config({ path: '.env' });
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from 'passport';
import passportMiddlewares from './middlewares/passport.js';
=======
import app from "./index.js";
import { sequelize } from './db/db.js';

// import models
import './models/Users.js';
import './models/Cards.js';
import './models/Transference.js';
import './models/Ingreso.js';
import './models/Egresos.js';
import './models/Transfers.js';
>>>>>>> 217ec4978f85c5ad70e110d686a31f8e32528224

// initalization of DATABASE and SERVER
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

<<<<<<< HEAD
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
app.use('/api/card', CardExternal);

// export app
export default app;
=======
export default Main;
>>>>>>> 217ec4978f85c5ad70e110d686a31f8e32528224
