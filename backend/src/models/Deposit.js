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
      allowNull: false,
    },
    user_transferring:[ {
        id: {
          type: DataTypes.INTEGER
        },
        cbu: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        reason: {
          type: DataTypes.STRING,
        },
        amount: {
          type: DataTypes.FLOAT,
          allowNull: false,
        }
    }
  ]
  }, {
    timestamps: true
  });

  // ASOCIACIONES
