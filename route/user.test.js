const test = require('test')

const userRepo = require('repo/user')

test.api('Signup: creating new user', async (t, request) => {
  const userData = {
    email: 'testuser@test.com',
    password: 'testpw123',
    username: 'testuser',
    firstName: 'test',
    lastName: 'user',
  }

  const r = await request.post('/signup').send(userData)

  t.is(r.status, 200, 'success')
  t.notok(r.body.error, 'no error')
  t.ok(r.body.data.id, 'id returned')

  await userRepo.deleteById(r.body.data.id)
})
