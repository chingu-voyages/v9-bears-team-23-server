const dbHelper = require('./helper')
const config = require('connection-string')(process.env.DATABASE_URL)

module.exports = {
  database: dbHelper.getDatabaseNameForEnv(config.path[0]),
  dialect: 'postgres',
  host: config.hosts[0].name,
  password: config.password,
  username: config.user,
  port: config.hosts[0].port,
}
