'use strict'
module.exports = (sequelize, DataTypes) => {
  const Language = sequelize.define('Language', {
    name: DataTypes.STRING,
  }, {})
  Language.associate = function (models) {
    // associations can be defined here
    Language.belongsToMany(models.User, {through: 'UserLanguages', foreignKey: 'languageId', as: 'users'})
  }
  return Language
}
