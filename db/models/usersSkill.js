module.exports = (sequelize, DataTypes) => {
  const UsersSkill = sequelize.define('UsersSkill', {
    userId: DataTypes.INTEGER,
    skillId: DataTypes.INTEGER,
  }, {})
  UsersSkill.associate = function (models) {
    UsersSkill.belongsTo(models.User, {foreignKey: 'userId'})
    UsersSkill.belongsTo(models.Skills, {foreignKey: 'skillId'})
  }
  return UsersSkill
}
