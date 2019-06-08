const models = require('db')

async function getAll () {
  return models.user.findAll()
}

module.exports = {
  getAll,
}
