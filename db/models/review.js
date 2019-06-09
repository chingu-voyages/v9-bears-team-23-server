function Review (sequelize, DataTypes) {
  const reviewModel = sequelize.define('review', {
    advertId: {
      type: DataTypes.INTEGER,
      field: 'advert_id',
    },
    reviewerId: {
      type: DataTypes.INTEGER,
      field: 'reviewer_id',
    },
    comments: DataTypes.TEXT,
    stars: DataTypes.INTEGER,
  }, {})

  reviewModel.associate = function (models) {
    reviewModel.belongsTo(models.advert, {foreignKey: 'advertId', as: 'advert'})
    reviewModel.belongsTo(models.user, {foreignKey: 'userId', as: 'reviewer'})
  }

  return reviewModel
}

module.exports = Review
