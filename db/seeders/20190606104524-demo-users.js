'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [
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
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {})
  },
}
