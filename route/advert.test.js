const test = require('test')
const factory = require('db/factory')

test.api('It should get advert by skill id', async (t, request) => {
  const userData = await factory.user.generateUserData()
  const user = await factory.user.create(userData)
})
