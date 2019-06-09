const _ = require('lodash')
const joi = require('joi')

const error = require('error')

const defaults = {
  abortEarly: false,
  allowUnknown: false,
  convert: true,
}

function validator (path, target, schema, options = {}) {
  const opts = _.defaults(options, defaults)
  const schemaCompiled = joi.compile(schema)

  return function (req, res, next) {
    const input = _.get(req, path)

    const {error: err, value: data} = schemaCompiled.validate(input, opts)
    if (err) {
      err.target = target
      throw new error.ValidationError('http.bad_request', err, 400)
    }

    _.update(req, `v.${target}`, prevData => ({...prevData, ...data}))

    return next()
  }
}

module.exports = {
  body: validator.bind(null, 'body', 'body'),
  header: validator.bind(null, 'headers', 'header'),
  param: validator.bind(null, 'params', 'param'),
  query: validator.bind(null, 'query', 'query'),
}
