module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('advert', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.TEXT,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'user_id',
        references: {
          model: 'user',
          key: 'id',
        },
      },
      skillId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'skill_id',
        references: {
          model: 'skill',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("(now() at time zone 'utc')"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("(now() at time zone 'utc')"),
      },
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('advert')
  },
}
