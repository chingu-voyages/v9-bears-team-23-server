const router = require('express').Router()

router.get('/user', (req, res) => {
  // Get all users
})

router.get('/user/:userId', (req, res) => {
  const {userId} = req.query.param // eslint-disable-line
  // Get by userId
})

module.exports = router
