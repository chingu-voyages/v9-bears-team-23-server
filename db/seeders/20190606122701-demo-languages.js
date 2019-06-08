'use strict'
const languages = require('../../helpers/languages-english')
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Languages',
      languages
      , {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Languages', null, {})
  },
}
