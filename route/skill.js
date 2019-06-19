const router = require('express').Router()
const joi = require('joi')

const validate = require('middleware/validate')
const {apiFail, apiSuccess} = require('helpers/responseHandler')

const skillRepo = require('repo/skill')
const userRepo = require('repo/user')

router.get('/skill', (req, res, next) => {
  skillRepo.getAll()
  .then(apiSuccess(res))
  .catch(apiFail(res))
})

router.get('/skill/:skillId', validate.param({
  skillId: joi.number().positive().required(),
}), validate.query({
  sortBy: joi.string().valid(['rating', 'price']).trim().optional().default('rating'),
  orderBy: joi.string().valid(['asc', 'desc']).trim().optional().default('desc'),
  location: joi.string().trim().optional(),
}), (req, res, next) => {
  const {skillId} = req.v.param
  const {sortBy, orderBy} = req.v.query

  userRepo.getBySkillId(skillId, {sortBy, orderBy})
  .then(apiSuccess(res))
  .catch(apiFail(res))
})

module.exports = router
