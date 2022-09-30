import { sequelize } from '../db/db.js';
import { DataTypes } from 'sequelize';

export const User = sequelize.define('User', {
<<<<<<< HEAD
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
    resetToken: {
      type: DataTypes.STRING,
      allowNull:true
    },
    created_at: {
      type: DataTypes.DATE
    }
  },
    {
      timestamps: false

    });
=======
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
    type: DataTypes.INTEGER,
    allowNull: true
  },
  cuil_ruc: {
    type: DataTypes.INTEGER,
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
},
  {
    timestamps: true
  });
>>>>>>> 0c8442533e247575e364164752c25257bb179665

    // ASOCIACIONES
  // User.associate = (Models) => {
  //   const { Ingreso } = Models;

  //   User.hasOne
  // };
