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
<<<<<<< HEAD
      type: DataTypes.BIGINT,
=======
      type: DataTypes.STRING,
>>>>>>> 217ec4978f85c5ad70e110d686a31f8e32528224
=======
      type: DataTypes.STRING,
>>>>>>> IM_BK_wallet
      allowNull: false,
      unique: true
    },
    exp_date: {
<<<<<<< HEAD
<<<<<<< HEAD
      type: DataTypes.DATE,
      allowNull: false
    },
    issue_date: {
      type: DataTypes.DATE,
=======
=======
>>>>>>> IM_BK_wallet
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    issue_date: {
      type: DataTypes.DATEONLY,
<<<<<<< HEAD
>>>>>>> 217ec4978f85c5ad70e110d686a31f8e32528224
=======
>>>>>>> IM_BK_wallet
      allowNull: false
    },
    cvv: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
<<<<<<< HEAD
<<<<<<< HEAD
    status: {
      type: DataTypes.STRING,
      allowNull: true
    },
=======
=======
>>>>>>> IM_BK_wallet
    // status: {
    //   type: DataTypes.STRING,
    //   allowNull: true
    // },
<<<<<<< HEAD
>>>>>>> 217ec4978f85c5ad70e110d686a31f8e32528224
=======
>>>>>>> IM_BK_wallet
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
