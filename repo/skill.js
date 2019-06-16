const _ = require('lodash') // eslint-disable-line

const error = require('error')
const models = require('db')

async function getAll () {
  return models.skill.findAll()
  .catch(error.db)
}

module.exports = {
  getAll,
}
