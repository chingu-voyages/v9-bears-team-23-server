'use strict'
module.exports = (sequelize, DataTypes) => {
  const UsesrSkill = sequelize.define('UsesrSkill', {
    userId: DataTypes.INTEGER,
    skillId: DataTypes.INTEGER,
  }, {})
  UsesrSkill.associate = function (models) {
    UsesrSkill.belongsTo(models.User, {foreignKey: 'userId'})
    UsesrSkill.belongsTo(models.Skills, {foreignKey: 'skillId'})
  }
  return UsesrSkill
}
