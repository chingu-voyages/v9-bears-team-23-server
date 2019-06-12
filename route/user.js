const router = require('express').Router()
const joi = require('joi')
const jwt = require('jsonwebtoken')

const validate = require('middleware/validate')
const auth = require('middleware/auth')
const {apiFail, apiSuccess} = require('helpers/responseHandler')

const userRepo = require('repo/user')

router.post('/signup', validate.body({
  username: joi.string().trim().required(),
  email: joi.string().email().required(),
  firstName: joi.string().trim().required(),
  lastName: joi.string().trim().required(),
  password: joi.string().min(5).max(15).required(),
}), (req, res) => {
  const {username, email, password, firstName, lastName} = req.v.body
  userRepo.signup({username, email, password, firstName, lastName})
  .then(apiSuccess(res))
  .catch(apiFail(res))
})

router.post('/auth', validate.body({
  email: joi.string().email().required(),
  password: joi.string().min(5).max(15).required(),
}), async (req, res, next) => {
  const {email, password} = req.v.body
  const user = await userRepo.getByEmailPassword(email, password)
  const token = jwt.sign({id: user.id}, process.env.JWT_SECRET)
  apiSuccess(res)({token})
})

router.get('/user', auth, (req, res, next) => {
  userRepo.getAll()
  .then(apiSuccess(res))
  .catch(apiFail(res))
})

router.get('/user/:userId', auth, validate.param({
  userId: joi.number().positive().required(),
}), (req, res) => {
  const {userId} = req.v.param
  userRepo.getById(userId)
  .then(apiSuccess(res))
  .catch(apiFail(res))
})

module.exports = router
