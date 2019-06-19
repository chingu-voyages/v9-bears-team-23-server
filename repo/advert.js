const _ = require('lodash')

const konst = require('konst')
const models = require('db')

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
}

module.exports = {
  getBySkillId,
}
