const models = require('db')
const helperRepo = require('repo/helper')

const createdUsers = []

async function create (userData = {}) {
  const {password, ...rest} = userData
  return models.user.create({
    password: await helperRepo.hashPassword(password),
    ...rest,
  })
  .then(r => {
    createdUsers.push(r)
    return r
  })
}

async function generateUserData () {
  const userData = {
    email: 'test0@email.com',
    username: 'testUser0',
    firstName: 'testFirst',
    lastName: 'testLast',
    password: 'testPassword',
  }

  for (const u of createdUsers) {
    if (u.email === userData.email) {
      const splittedEmail = userData.email('@')
      const l = splittedEmail[0]
      const num = l[l.length - 1]
      l.replace(num, `${(parseInt(num) + 1)}`)
    } else if (u.username === userData.username) {
      const w = userData.username
      const num = w[w.length - 1]
      w.replace(num, `${(parseInt(num) + 1)}`)
    }
  }

  return userData
}

module.exports = {
  create,
  generateUserData,
}
