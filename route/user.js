const router = require('express').Router()
const joi = require('joi')

const validate = require('middleware/validate')

const userRepo = require('repo/user')

router.post('/signup', validate.body({
  email: joi.string().email().required(),
}), (req, res) => {

})

router.get('/user', async (req, res, next) => {
  const r = await userRepo.getAll()
  console.log(r)
  return res.json(r)
})

router.get('/user/:userId', (req, res) => {
  const {userId} = req.query.param // eslint-disable-line
  // Get by userId
})

module.exports = router
