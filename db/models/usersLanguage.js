function UsersLanguage (sequelize, DataTypes) {
  const usersLanguageModel = sequelize.define('usersLanguage', {
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id',
    },
    languageId: {
      type: DataTypes.INTEGER,
      field: 'language_id',
    },
  }, {
    tableName: 'users_language',
    underscored: true,
  })

  usersLanguageModel.associate = function (models) {
    usersLanguageModel.belongsTo(models.user, {foreignKey: 'userId'})
    usersLanguageModel.belongsTo(models.language, {foreignKey: 'languageId'})
  }

  return usersLanguageModel
}

module.exports = UsersLanguage
