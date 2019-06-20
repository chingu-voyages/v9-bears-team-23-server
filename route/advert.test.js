const _ = require('lodash')

const test = require('test')
const factory = require('db/factory')

const skillRepo = require('repo/skill')

test.only.api('It should create new advert', async (t, request) => {
  const userData = await factory.user.generateUserData()
  const user = await factory.user.create(userData)
  const skills = await skillRepo.getAll()
  const advertData = {
    title: 'advertCreateTestTitle',
    description: 'Advert create test description',
    skillId: skills[_.random(0, skills.length - 1)],
    location: 'advertCreateTestLocation',
    price: 200,
  }

  const r1 = await request.post(`/user/${user.id}/advert`)
  .send(advertData)
  // .set(await test.auth(user.id))

  console.log(r1.body.data)
})

test.api('It should get advert by skill id', async (t, request) => {
  // const userData = await factory.user.generateUserData()
  // const user = await factory.user.create(userData)
})
