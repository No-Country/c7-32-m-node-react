import { sequelize } from '../db/db.js';
import { DataTypes } from 'sequelize';

export const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    notEmpy: true
  },
  surname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
    notEmpy: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    min: 5,
    notEmpy: true
  },
  country: {
    type: DataTypes.STRING,
    allowNull: true
  },
  phone: {
    type: DataTypes.INTEGER,
    allowNull: true,
    unique: true,
    notEmpy: false
  },
  cbu: {
    type: DataTypes.STRING,
    allowNull: true
  },
  cuil_ruc: {
    type: DataTypes.BIGINT,
    allowNull: true
  },
  card_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true
  },
  resetToken: {
    type: DataTypes.STRING,
    allowNull: true
  },
  amount: {
    type: DataTypes.DOUBLE,
    defaultValue: 10000
  }
},
  {
    timestamps: true
  });

    // ASOCIACIONES
  // User.associate = (Models) => {
  //   const { Ingreso } = Models;

  //   User.hasOne
  // };