import {sequelize} from '../db/db.js';
import {DataTypes} from 'sequelize';

<<<<<<< HEAD
export const Ingreso = sequelize.define('Ingreso', {
=======
export const Transference = sequelize.define('Transference', {
>>>>>>> IM_BK_wallet
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true
    },
<<<<<<< HEAD
=======
    //usuario de aquien le esta ingresando//
>>>>>>> IM_BK_wallet
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
<<<<<<< HEAD
    user_amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    }
    
  }, {
    timestamps: true
  });
=======
      
        user_amount: {
          type: DataTypes.DOUBLE,
          allowNull: false,
        }
  }, {
    timestamps: true
  });

  // ASOCIACIONES
>>>>>>> IM_BK_wallet
