module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user', [
      {
        username: 'John Doe',
        email: 'john@email.com',
        password: '123456',
        countryId: 1,
        role: 'Student',
      },
      {
        username: 'Jane Smith',
        email: 'Jane@email.com',
        password: '123456',
        countryId: 1,
        role: 'Teacher',
      },
      {
        username: 'Chris Parr',
        email: 'chris@email.com',
        password: '123456',
        countryId: 1,
        role: 'Admin',
      },
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user', null, {})
  },
}
