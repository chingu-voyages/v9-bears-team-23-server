module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('review', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      advertId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'advert_id',
        references: {
          model: 'advert',
          key: 'id',
        },
      },
      reviewerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'reviewer_id',
        references: {
          model: 'user',
          key: 'id',
        },
      },
      comments: {
        type: Sequelize.TEXT,
      },
      stars: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at',
        defaultValue: Sequelize.literal("(now() at time zone 'utc')"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at',
        defaultValue: Sequelize.literal("(now() at time zone 'utc')"),
      },
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('review')
  },
}
