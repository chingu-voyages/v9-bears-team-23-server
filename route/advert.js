const router = require('express').Router()
const joi = require('joi')
const _ = require('lodash')

const validate = require('middleware/validate')
const {apiFail, apiSuccess} = require('helpers/responseHandler')
const konst = require('konst')

const advertRepo = require('repo/advert')

router.get('/advert/:skillId', validate.param({
  skillId: joi.number().positive().required(),
}), validate.query({
  sortBy: joi.string().valid(_.values(konst.advertSort)).trim().optional().default('rating'),
  orderBy: joi.string().valid(['asc', 'desc']).trim().optional().default('desc'),
  location: joi.string().trim().optional(),
}), (req, res, next) => {
  const {skillId} = req.v.param
  const {sortBy, orderBy, location} = req.v.query

  advertRepo.getBySkillId(skillId, {sortBy, orderBy, location})
  .then(apiSuccess(res))
  .catch(apiFail(res))
})

router.post('/advert', validate)

module.exports = router
