const models = require('db')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return models.user.bulkCreate([
      {
        username: 'John Doe',
        email: 'john@email.com',
        password: '123456',
        countryId: 1,
        role: 'student',
      },
      {
        username: 'Jane Smith',
        email: 'Jane@email.com',
        password: '123456',
        countryId: 1,
        role: 'tutor',
      },
      {
        username: 'Chris Parr',
        email: 'chris@email.com',
        password: '123456',
        countryId: 1,
        role: 'admin',
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user', null, {})
  },
}
