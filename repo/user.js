const _ = require('lodash') // eslint-disable-line

const models = require('db')
const error = require('error')

const helperRepo = require('repo/helper')

async function signup ({password, ...rest}) {
  return models.user.create({
    password: await helperRepo.hashPassword(password),
    ...rest,
  }, {returning: true})
  .then(res => ({id: res.id}))
}

async function getAll () {
  return models.user.findAll()
}

async function getById (userId) {
  return models.user.findOne({
    where: {id: userId},
  })
  .catch(error.db)
}

async function getByEmail (email) {
  return models.user.findOne({
    where: {email},
  })
  .catch(error.db)
}

async function getByEmailPassword (email, password) {
  const user = await getByEmail(email)
  await helperRepo.checkPasswordWithHash(password, user.password)
  return user
}

async function deleteById (id) {
  return models.user.destroy({where: {id}})
}

module.exports = {
  deleteById,
  getAll,
  getByEmail,
  getByEmailPassword,
  getById,
  signup,
}
