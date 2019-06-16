const _ = require('lodash')

const models = require('db')
const error = require('error')
const konst = require('konst')
const {findOneResolver} = require('utils/db')

const helperRepo = require('repo/helper')

async function signup ({password, ...rest}) {
  return models.user.create({
    password: await helperRepo.hashPassword(password),
    ...rest,
  }, {returning: true})
  .catch(err => {
    switch (_.get(err, 'original.constraint')) {
      case 'user_email_key':
        throw error('user.duplicate', err)
      default:
        throw error.db(err)
    }
  })
  .then(res => ({id: res.id}))
}

async function getAll () {
  return models.user.findAll()
  .catch(error.db)
}

async function getTutors () {
  return models.user.findAll({
    where: {role: konst.role.tutor},
  })
  .catch(error.db)
}

async function getByTutorId (tutorId) {
  return models.user.findOne({
    where: {
      id: tutorId,
      role: konst.role.tutor,
    },
  })
  .catch(error.db)
  .then(findOneResolver('user.not_found'))
}

async function getBySkillId (skillId, {sortBy, orderBy}) {
  return models.user.findAll({
    include: [{
      model: models.skill,
      as: 'skill',
      where: {id: skillId},
    }],
    order: [[sortBy, _.toUpper(orderBy)]],
  })
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
  getByTutorId,
  getBySkillId,
  getTutors,
  signup,
}
