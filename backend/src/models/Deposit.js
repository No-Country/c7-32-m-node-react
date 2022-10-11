import {sequelize} from '../db/db.js';
import {DataTypes} from 'sequelize';

export const Deposit = sequelize.define('Ingreso', {
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
      user_transferring_id: {
          type: DataTypes.INTEGER
        },
        user_transferring_cbu: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        user_transferring_reason: {
          type: DataTypes.STRING,
        },
        user_transferring_amount: {
          type: DataTypes.FLOAT,
          allowNull: false,
        }
  }, {
    timestamps: true
  });

  // ASOCIACIONES
