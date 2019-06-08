const _ = require('lodash')

const konst = require('konst')

function User (sequelize, DataTypes) {
  const userModel = sequelize.define('user', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    countryId: DataTypes.INTEGER,
    role: {
      type: DataTypes.ENUM,
      values: _.valuesIn(konst.role),
    },
  }, {
    tableName: 'user',
    underscored: true,
  })

  userModel.associate = function (models) {
    User.belongsToMany(models.Language, {through: 'UsersLanguages', foreignKey: 'userId', as: 'languages'})
    User.belongsToMany(models.Skill, {through: 'UsersSkills', foreignKey: 'userId', as: 'skills'})
    User.belongsTo(models.Country)
  }

  return userModel
}

module.exports = User
