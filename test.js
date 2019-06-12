const _ = require('lodash')
const jwt = require('jsonwebtoken')
const supertest = require('supertest')
const tape = require('tape')

const {sequelize} = require('db')
const request = supertest(require('app').callback())

const store = new Map()

tape.onFinish(async function () {
  sequelize.close()
})

process.on('unhandledRejection', function (reason) {
  console.error('unhandled rejection', reason)
  process.exit(1)
})

function test () {
  const cb = _.last(arguments)
  tape(..._.initial(arguments), async function (t) {
    await cb(t, store)
    t.end()
  })
}

function testOnly () {
  const cb = _.last(arguments)
  tape.only(..._.initial(arguments), async function (t) {
    await cb(t, store)
    t.end()
  })
}

function api () {
  const cb = _.last(arguments)
  tape(..._.initial(arguments), async function (t) {
    await cb(t, request, store)
    t.end()
  })
}

function apiOnly () {
  const cb = _.last(arguments)
  tape.only(..._.initial(arguments), async function (t) {
    await cb(t, request, store)
    t.end()
  })
}

async function auth (userId) {
  return {
    'Authorization': `Bearer ${jwt.sign({id: userId}, process.env.JWT_SECRET)}`,
  }
}

test.auth = auth
test.api = api
test.api.skip = tape.skip
test.skip = tape.skip
test.skip.api = tape.skip
test.only = testOnly
test.only.api = apiOnly

module.exports = test
