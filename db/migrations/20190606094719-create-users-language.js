module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UsersLanguages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { // User hasMany Languages n:n
          model: 'Users',
          key: 'id',
        },
      },
      languageId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { // Languages hasMany Users n:n
          model: 'Languages',
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
    return queryInterface.dropTable('UsersLanguages')
  },
}
