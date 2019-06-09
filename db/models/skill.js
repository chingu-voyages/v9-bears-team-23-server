function Skill (sequelize, DataTypes) {
  const skillModel = sequelize.define('skill', {
    name: DataTypes.STRING,
  }, {
    tableName: 'skill',
    underscored: true,
  })

  skillModel.associate = function (models) {
    skillModel.belongsToMany(models.user, {through: 'usersSkill', foreignKey: 'skillId', as: 'user'})
    skillModel.hasMany(models.advert)
  }

  return skillModel
}

module.exports = Skill
