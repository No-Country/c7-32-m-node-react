import { sequelize } from '../db/db.js';
import { DataTypes } from 'sequelize';

export const Egreso = sequelize.define('Egreso', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  amount: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  reason: {
    type: DataTypes.STRING
  },
  
},
{
  timestamps: true
});
