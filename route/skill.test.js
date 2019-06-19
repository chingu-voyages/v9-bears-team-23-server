const factory = require('db/factory')

const test = require('test')

test.only.api('Should get a skill by id', async (t, request) => {
  const userData = await factory.user.generateUserData()
  const user = await factory.user.create(userData)
})
