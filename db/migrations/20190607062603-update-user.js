module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('user', 'country_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'country',
        key: 'id',
      },
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('user', 'country_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
    })
  },
}
