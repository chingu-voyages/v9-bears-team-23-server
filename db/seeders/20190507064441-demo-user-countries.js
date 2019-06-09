const countries = require('helpers/countries')
const models = require('db')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return models.country.bulkCreate([...countries])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('country', null, {})
  },
}
