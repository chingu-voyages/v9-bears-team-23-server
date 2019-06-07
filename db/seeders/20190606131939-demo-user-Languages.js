'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UsersLanguages', [
      {
        userId: 1,
        languageId: 1,
      },
      {
        userId: 1,
        languageId: 2,
      },
      {
        userId: 2,
        languageId: 2,
      },
      {
        userId: 3,
        languageId: 3,
      },
      {
        userId: 3,
        languageId: 1,
      },

    ]
    , {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('People', null, {})
  },
}
