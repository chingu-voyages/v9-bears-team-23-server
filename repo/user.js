const models = require('db')

const helperRepo = require('repo/helper')

async function signup ({password, ...rest}) {
  return models.user.create({
    password: await helperRepo.hashPassword(password),
    ...rest,
  }, {returning: true})
  .then(res => ({id: res.id}))
}

function getAll () {
  return models.user.findAll()
}

function getById (userId) {
  return models.user.findOne({
    where: {id: userId},
  })
}

module.exports = {
  getAll,
  getById,
  signup,
}
