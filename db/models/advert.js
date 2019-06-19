function Advert (sequelize, DataTypes) {
  const advertModel = sequelize.define('advert', {
    price: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id',
    },
    skillId: {
      type: DataTypes.INTEGER,
      field: 'skill_id',
    },
    title: DataTypes.STRING,
    location: DataTypes.STRING,
  }, {
    tableName: 'advert',
    underscored: true,
  })

  advertModel.associate = function (models) {
    advertModel.belongsTo(models.skill)
    advertModel.belongsTo(models.user)
  }

  return advertModel
}

module.exports = Advert
