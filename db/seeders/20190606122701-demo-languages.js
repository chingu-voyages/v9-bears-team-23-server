const languages = require('helpers/languages-english')
const models = require('db')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return models.language.bulkCreate(languages)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('language', null, {})
  },
}
