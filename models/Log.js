const { DataTypes } = require('sequelize');
const sequelize = require('../database/dbConnect');

const User = sequelize.define(
  'Log',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    temp: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    distance: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = User;
