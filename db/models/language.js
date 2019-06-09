function Language (sequelize, DataTypes) {
  const languageModel = sequelize.define('language', {
    name: DataTypes.STRING,
  }, {
    tableName: 'language',
    underscored: true,
  })

  languageModel.associate = function (models) {
    languageModel.belongsToMany(models.user, {through: 'usersLanguage', foreignKey: 'languageId', as: 'user'})
  }

  return languageModel
}

module.exports = Language
