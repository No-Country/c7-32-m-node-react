export default function (db, DataTypes) {
  const Card = db.define('Card', {
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
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    exp_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    issue_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    cvv: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  // ASOCIACIONES

  return Card;
};
