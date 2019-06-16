const error = require('error')

function findOneResolver (errorMessage) {
  return function (res) {
    if (!res) throw error(errorMessage)
    return res
  }
}

module.exports = {
  findOneResolver,
}
