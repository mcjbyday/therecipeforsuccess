const User = require('./User');
const Meal = require('./Meal');

User.hasMany(Meal, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Meal.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Meal };
