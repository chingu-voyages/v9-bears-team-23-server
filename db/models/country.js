'use strict'
module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define('Country', {
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    img: DataTypes.STRING,
  }, {})
  Country.associate = function (models) {
    Country.hasMany(models.User)
  }
  return Country
}
