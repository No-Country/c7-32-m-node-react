import {sequelize} from '../db/db.js';
import {DataTypes} from 'sequelize';

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
      allowNull: false
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      notEmpy: true
    },
    cbu: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cuil_ruc: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    card_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE
    }
  },
    {
      timestamps: false

    });

    // ASOCIACIONES
  // User.associate = (Models) => {
  //   const { Ingreso } = Models;

  //   User.hasOne
  // };
