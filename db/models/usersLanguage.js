module.exports = (sequelize, DataTypes) => {
  const UsersLanguage = sequelize.define('UsersLanguage', {
    userId: DataTypes.INTEGER,
    languageId: DataTypes.INTEGER,
  }, {})
  UsersLanguage.associate = function (models) {
    // associations can be defined here
    UsersLanguage.belongsTo(models.User, {foreignKey: 'userId'})
    UsersLanguage.belongsTo(models.Language, {foreignKey: 'languageId'})
  }
  return UsersLanguage
}
