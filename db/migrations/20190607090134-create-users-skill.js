module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users_skill', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable('users_skill')
  },
}
