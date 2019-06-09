const _ = require('lodash')

const konst = require('konst')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.CHAR(64),
        allowNull: false,
      },
      countryId: {
        type: Sequelize.INTEGER,
        field: 'country_id',
        allowNull: true,
      },
      role: {
        type: Sequelize.ENUM,
        values: _.valuesIn(konst.role),
        defaultValue: 'none',
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      firstName: {
        type: Sequelize.STRING,
        field: 'first_name',
      },
      lastName: {
        type: Sequelize.STRING,
        field: 'last_name',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("(now() at time zone 'utc')"),
        field: 'created_at',
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("(now() at time zone 'utc')"),
        field: 'updated_at',
      },
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user')
  },
}
