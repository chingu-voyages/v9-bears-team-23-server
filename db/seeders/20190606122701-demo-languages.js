'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Languages', [
      {
        name: 'English',
      },
      {
        name: 'Hrvatski',
      },
      {
        name: 'Polskie',
      },
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Languages', null, {})
  },
}
