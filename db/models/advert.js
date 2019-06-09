function Advert (sequelize, DataTypes) {
  const advertModel = sequelize.define('advert', {
    price: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    skillId: {
      type: DataTypes.INTEGER,
      field: 'skill_id',
    },
  }, {})

  advertModel.associate = function (models) {
    advertModel.belongsTo(models.skill)
  }

  return advertModel
}

module.exports = Advert
