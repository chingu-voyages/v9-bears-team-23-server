function Country (sequelize, DataTypes) {
  const countryModel = sequelize.define('country', {
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    img: DataTypes.STRING,
  }, {
    tableName: 'country',
    underscored: true,
  })

  countryModel.associate = function (models) {
    countryModel.hasMany(models.user)
  }

  return countryModel
}

module.exports = Country
