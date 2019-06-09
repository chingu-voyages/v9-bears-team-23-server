const skills = require('helpers/skills')
const models = require('db')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return models.skill.bulkCreate(skills)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('skill', null, {})
  },
}
