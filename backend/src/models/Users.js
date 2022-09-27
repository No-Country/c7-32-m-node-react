import {sequelize} from '../db/db.js';
import {DataTypes} from 'sequelize';

export const User = sequelize.define("Users", {
    id: {
      type: DataTypes.INTEGER,
       autoIncrement: true,
        primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
    },
    surname: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
    },
    country: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.INTEGER,
      },
      cbu: {
        type: DataTypes.STRING,
      },
      cuil_ruc: {
        type: DataTypes.INTEGER,
      },
      image: {
        type: DataTypes.STRING,
      },
      card_id: {
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.STRING,
      },
  }, {
    timestamps: true
  });