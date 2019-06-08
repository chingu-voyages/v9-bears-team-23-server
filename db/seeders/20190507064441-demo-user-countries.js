const countries = require('helpers/countries')
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Countries',
      countries
      , {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Countries', null, {})
  },
}
