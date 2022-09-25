const { Sequelize, DataTypes } = require('sequelize');
const User = require('./models/users');

const db = {
  name: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  pw: process.env.DB_PW
};

const sequelize = new Sequelize(db.name, db.username, db.pw, {
  host: db.host,
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: true,
    }
  }
  }
);

// CREATE MODELS
(async () => {
  await User(sequelize, DataTypes).sync();
})();

exports.default = sequelize;
