import app from "../index.js";
import { sequelize } from './db/db.js';

// import models
import './models/Users.js';
import './models/Cards.js';
import './models/Transference.js';
import './models/Ingreso.js';
import './models/Egresos.js';
import './models/Transfers.js';

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

export default Main;
