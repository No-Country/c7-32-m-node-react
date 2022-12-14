import {sequelize} from '../db/db.js';
import {DataTypes} from 'sequelize';

export const Ingreso = sequelize.define('Ingreso', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    user_amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    }
    
  }, {
    timestamps: true
  });
