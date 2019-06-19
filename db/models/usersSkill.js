function UsersSkill (sequelize, DataTypes) {
  const usersSkillModel = sequelize.define('usersSkill', {
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id',
    },
    skillId: {
      type: DataTypes.INTEGER,
      field: 'skill_id',
    },
  }, {
    tableName: 'users_skill',
    underscored: true,
  })

  return usersSkillModel
}

module.exports = UsersSkill
