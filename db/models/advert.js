module.exports = (sequelize, DataTypes) => {
  const Advert = sequelize.define('Advert', {
    price: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    skillId: DataTypes.INTEGER,
  }, {})
  Advert.associate = function (models) {
    Advert.belongsTo(models.Skills)
  }
  return Advert
}
