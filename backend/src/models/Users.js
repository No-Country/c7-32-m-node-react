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
<<<<<<< HEAD
<<<<<<< HEAD
    type: DataTypes.INTEGER,
    allowNull: true
  },
  cuil_ruc: {
    type: DataTypes.INTEGER,
=======
=======
>>>>>>> IM_BK_wallet
    type: DataTypes.STRING,
    allowNull: true
  },
  cuil_ruc: {
    type: DataTypes.BIGINT,
<<<<<<< HEAD
>>>>>>> 217ec4978f85c5ad70e110d686a31f8e32528224
=======
>>>>>>> IM_BK_wallet
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> IM_BK_wallet
  amount: {
    type: DataTypes.DOUBLE,
    defaultValue: 10000
  }
<<<<<<< HEAD
>>>>>>> 217ec4978f85c5ad70e110d686a31f8e32528224
=======
>>>>>>> IM_BK_wallet
},
  {
    timestamps: true
  });

    // ASOCIACIONES
  // User.associate = (Models) => {
  //   const { Ingreso } = Models;

  //   User.hasOne
<<<<<<< HEAD
<<<<<<< HEAD
  // };
=======
  // };
>>>>>>> 217ec4978f85c5ad70e110d686a31f8e32528224
=======
  // };
>>>>>>> IM_BK_wallet
