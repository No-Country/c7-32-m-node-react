module.exports = (db, DataTypes) => {
  const Ingreso = db.define('Ingreso', {
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
    amount: {
      type: DataTypes.INTEGER,

    }
  });

  // ASOCIACIONES

  return Ingreso;
};
