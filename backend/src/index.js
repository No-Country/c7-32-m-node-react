import app from "./app.js";
import { sequelize } from './db/db.js';

// import models
import './models/Users.js';
import { User } from './models/Users.js';
import './models/Cards.js';
import './models/Ingresos.js';
import './models/Egresos.js';

// initalization of DATABASE and SERVER
const Main = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log("Connection has been established successfully.");
    app.listen(app.get("PORT"));
    console.log(`Server listening on port ${app.get("PORT")}`);
    // console.log(await User.findAll());
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

Main();
