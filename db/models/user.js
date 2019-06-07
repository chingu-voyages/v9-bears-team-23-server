'use strict'
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    countryId: DataTypes.INTEGER,
    role: DataTypes.ENUM,
  }, {})
  User.associate = function (models) {
    // associations can be defined here
    User.belongsToMany(models.Language, {through: 'UserLanguages', foreignKey: 'userId', as: 'languages'})
    // User.belongsTo(models.Country)
  }
  return User
}
