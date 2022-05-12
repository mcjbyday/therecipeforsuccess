const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Meal extends Model {}

Meal.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    isGlutenFree: {
      type: DataTypes.BOOLEAN,
    },
    isNutFree: {
      type: DataTypes.BOOLEAN,
    },
    isVegan: {
      type: DataTypes.BOOLEAN,
    },
    isDairyFree: {
      type: DataTypes.BOOLEAN,
    },
    isPescatarian: {
      type: DataTypes.BOOLEAN,
    },
    isVegetarian: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'meal',
  }
);

module.exports = Meal;
