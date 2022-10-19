import { sequelize } from '../db/db.js';
import { DataTypes } from 'sequelize';

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
<<<<<<< HEAD
      type: DataTypes.BIGINT,
=======
      type: DataTypes.STRING,
>>>>>>> 217ec4978f85c5ad70e110d686a31f8e32528224
      allowNull: false,
      unique: true
    },
    exp_date: {
<<<<<<< HEAD
      type: DataTypes.DATE,
      allowNull: false
    },
    issue_date: {
      type: DataTypes.DATE,
=======
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    issue_date: {
      type: DataTypes.DATEONLY,
>>>>>>> 217ec4978f85c5ad70e110d686a31f8e32528224
      allowNull: false
    },
    cvv: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
<<<<<<< HEAD
    status: {
      type: DataTypes.STRING,
      allowNull: true
    },
=======
    // status: {
    //   type: DataTypes.STRING,
    //   allowNull: true
    // },
>>>>>>> 217ec4978f85c5ad70e110d686a31f8e32528224
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    timestamps: true
  });

<<<<<<< HEAD
  // ASOCIACIONES
=======
  // ASOCIACIONES
>>>>>>> 217ec4978f85c5ad70e110d686a31f8e32528224
