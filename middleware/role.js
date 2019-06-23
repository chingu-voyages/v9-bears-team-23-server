const _ = require('lodash')

const error = require('error')

const userRepo = require('repo/user')

module.exports = role => async (req, res, next) => {
  const {userId: {id: userId}} = req
  const user = await userRepo.getById(userId)

  if (!_.isEqual(role, user.role)) {
    throw new error.GenericError('role.insufficient', null, 401)
  }

  _.set(req, 'userModel', user)

  next()
}
