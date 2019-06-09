const bcrypt = require('bcryptjs')

async function hashPassword (password) {
  return bcrypt.hash(password, Number(process.env.BCRYPT_ROUNDS))
}

module.exports = {
  hashPassword,
}
