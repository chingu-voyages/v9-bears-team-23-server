const jwt = require('jsonwebtoken')

const error = require('error')

function auth (req, res, next) {
  const {authorization} = req.headers
  const token = authorization.replace('Bearer ', '')
  try {
    req.userId = jwt.verify(token, process.env.JWT_SECRET)
    next()
  } catch (err) {
    throw error('http.unauthorized')
  }
}

module.exports = auth
