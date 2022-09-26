import {sequelize} from '../db/db.js';
import {DataTypes} from 'sequelize';

export const Card = sequelize.define("Cards", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    number: {
      type: DataTypes.INTEGER,
    },
    exp_date: {
      type: DataTypes.DATE
    },
    issue_date: {
      type: DataTypes.DATE
    },
    cvv: {
      type: DataTypes.INTEGER
    },
    status: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: true
  });