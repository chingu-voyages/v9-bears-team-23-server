module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users_language', {
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
        references: { // User hasMany Languages n:n
          model: 'user',
          key: 'id',
        },
      },
      languageId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'language_id',
        references: { // Languages hasMany Users n:n
          model: 'language',
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
    return queryInterface.dropTable('users_language')
  },
}
