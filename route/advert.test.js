const _ = require('lodash')

const test = require('test')
const factory = require('db/factory')
const konst = require('konst')

const skillRepo = require('repo/skill')

const advertCreationData = {
  title: 'advertCreateTestTitle',
  description: 'Advert create test description',
  location: 'advertCreateTestLocation',
  price: 200,
}

test.api('It should create new advert', async (t, request) => {
  const userData = await factory.user.generateUserData(konst.role.tutor)
  const user = await factory.user.create(userData)
  const skills = await skillRepo.getAll()
  const advertData = {
    ...advertCreationData,
    skillId: skills[_.random(0, skills.length - 1)].id,
  }

  const r1 = await request.post(`/user/${user.id}/advert`)
  .send(advertData)
  .set(await test.auth(user.id))

  t.is(r1.status, 200, 'status ok')
  t.ok(r1.body.data.id, 'advert created')
})

test.api('It should get advert by skill id', async (t, request) => {
  const userData = await factory.user.generateUserData(konst.role.tutor)
  const user = await factory.user.create(userData)
  const skills = await skillRepo.getAll()
  const skillId = skills[_.random(0, skills.length - 1)].id
  const advertData = {
    ...advertCreationData,
    skillId,
  }

  const r1 = await request.post(`/user/${user.id}/advert`)
  .send(advertData)
  .set(await test.auth(user.id))

  t.ok(r1.body.data.id, 'advert created')

  const r2 = await request.get(`/advert/${skillId}`)

  t.is(r2.status, 200, 'status ok')
  t.same(r2.body.data.length, 1, 'adverts returned')
})
