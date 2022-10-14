import { sequelize } from '../db/db.js';
import { DataTypes } from 'sequelize';

export const Transfers = sequelize.define('Transfers', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  user_transferring_id: {
    type: DataTypes.INTEGER
  },
  user_transferring_cbu: {
    type: DataTypes.STRING,
    allowNull: true
  },
  user_transferring_reason: {
    type: DataTypes.STRING
  },
  user_transferring_amount: {
    type: DataTypes.DOUBLE,
    allowNull: true
  }
}, {
  timestamps: true
});
