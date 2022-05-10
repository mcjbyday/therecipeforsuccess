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
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    isGlutenFree: {
      type: DataTypes.Boolean,
    },
    isNutFree: {
      type: DataTypes.Boolean,
    },
    isVegan: {
      type: DataTypes.Boolean,
    },
    isDairyFree: {
      type: DataTypes.Boolean,
    },
    isPescatarian: {
      type: DataTypes.Boolean,
    },
    isVegetarian: {
      type: DataTypes.Boolean,
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
