module.exports = (sequelize, DataTypes) => {
  const Skill = sequelize.define('Skill', {
    name: DataTypes.STRING,
  }, {})
  Skill.associate = function (models) {
    Skill.belongsToMany(models.User, {through: 'UsersSkills', foreignKey: 'skillId', as: 'users'})
    Skill.hasMany(models.Adverts)
  }
  return Skill
}
