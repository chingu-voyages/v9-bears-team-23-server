module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    advertId: DataTypes.INTEGER,
    reviewerId: DataTypes.INTEGER,
    comments: DataTypes.TEXT,
    stars: DataTypes.INTEGER,
  }, {})
  Review.associate = function (models) {
    // associations can be defined here
    Review.belongsTo(models.Advert, {foreignKey: 'advertId', as: 'advert'})
    Review.belongsTo(models.User, {foreignKey: 'userId', as: 'reviewer'})
  }
  return Review
}
