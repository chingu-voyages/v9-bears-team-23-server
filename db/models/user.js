const _ = require('lodash')

const konst = require('konst')

function User (sequelize, DataTypes) {
  const userModel = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      required: true,
    },
    email: {
      type: DataTypes.STRING,
      required: true,
    },
    password: {
      type: DataTypes.CHAR(64),
      required: true,
    },
    countryId: {
      type: DataTypes.INTEGER,
      field: 'country_id',
      required: false,
    },
    role: {
      type: DataTypes.ENUM,
      values: _.valuesIn(konst.role),
    },
    firstName: {
      type: DataTypes.STRING,
      field: 'first_name',
      required: true,
    },
    lastName: {
      type: DataTypes.STRING,
      field: 'last_name',
      required: true,
    },
    rating: {
      type: DataTypes.DECIMAL(1, 2),
      defaultValue: 0,
      allowNull: false,
    },
  }, {
    tableName: 'user',
    underscored: true,
  })

  userModel.associate = function (models) {
    userModel.belongsToMany(models.language, {through: 'usersLanguage', foreignKey: 'userId', as: 'language'})
    userModel.belongsToMany(models.skill, {through: 'usersSkill', foreignKey: 'userId', as: 'skill'})
    userModel.belongsTo(models.country)
  }

  return userModel
}

module.exports = User
