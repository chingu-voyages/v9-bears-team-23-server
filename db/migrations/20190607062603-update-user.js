module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('user', 'countryId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Countries',
        key: 'id',
      },
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('user', 'countryId', {
      type: Sequelize.INTEGER,
      allowNull: false,
    })
  },
}
