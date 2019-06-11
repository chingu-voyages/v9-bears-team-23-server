const bcrypt = require('bcryptjs')

const error = require('error')

async function hashPassword (password) {
  return bcrypt.hash(password, Number(process.env.BCRYPT_ROUNDS))
}

async function checkPasswordWithHash (password, hash) {
  if (!password || !hash || !await bcrypt.compare(password, hash)) {
    throw error('user.password_wrong')
  }
}

module.exports = {
  hashPassword,
  checkPasswordWithHash,
}
