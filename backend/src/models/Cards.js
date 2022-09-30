import {sequelize} from '../db/db.js';
import {DataTypes} from 'sequelize';

export const Card = sequelize.define('Card', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    surname: {
      type: DataTypes.STRING
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    exp_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    issue_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    cvv: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: true
  });

  // ASOCIACIONES