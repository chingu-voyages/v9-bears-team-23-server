const _ = require('lodash')

const konst = require('konst')

function User (sequelize, DataTypes) {
  const userModel = sequelize.define('user', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    countryId: {
      type: DataTypes.INTEGER,
      field: 'country_id',
    },
    role: {
      type: DataTypes.ENUM,
      values: _.valuesIn(konst.role),
    },
  }, {
    tableName: 'user',
    underscored: true,
  })

  userModel.associate = function (models) {
    userModel.belongsToMany(models.language, {through: 'usersLanguages', foreignKey: 'userId', as: 'language'})
    userModel.belongsToMany(models.skill, {through: 'usersSkills', foreignKey: 'userId', as: 'skill'})
    userModel.belongsTo(models.country)
  }

  return userModel
}

module.exports = User
