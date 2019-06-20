const _ = require('lodash')

const error = require('error')
const konst = require('konst')
const models = require('db')

async function create (userModel, advertData) {
  return userModel.createAdvert(advertData)
  .catch(err => {
    switch (_.get(err, 'original.constraint')) {
      case 'advert_skill_id_fkey':
        throw error('skill.does_not_exist', err)
      default:
        throw error.db(err)
    }
  })
}

async function getBySkillId (skillId, {sortBy, orderBy, location}) {
  orderBy = _.toUpper(orderBy)
  const order = sortBy === konst.advertSort.price
    ? [[sortBy, orderBy]]
    : [[models.user, sortBy, orderBy]]

  const q = {
    include: [
      {
        model: models.skill,
        as: 'skill',
        where: {id: skillId},
      },
      {
        model: models.user,
        as: 'user',
      },
    ],
    order,
  }

  if (location) q.where = {location}

  return models.advert.findAll(q)
  .catch(error.db)
}

module.exports = {
  create,
  getBySkillId,
}
