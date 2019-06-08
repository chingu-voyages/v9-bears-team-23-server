const skills = require('../../helpers/skills')
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Skills',
      skills
      , {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Skills', null, {})
  },
}
