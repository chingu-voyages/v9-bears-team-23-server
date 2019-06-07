const _ = require('lodash')
const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')

const db = {}
const dbHelper = require('./helper')
const dbConfig = require('connection-string')(process.env.DATABASE_URL)
const databaseName = dbHelper.getDatabaseNameForEnv(dbConfig.path[0])
const sequelize = new Sequelize(databaseName, dbConfig.user, dbConfig.password, {
  dialect: 'postgres',
  host: dbConfig.hosts[0].name,
  port: dbConfig.hosts[0].port,
  pool: {
    acquire: 30000,
    idle: 10000,
    max: 5,
    min: 1,
  },
})

sequelize.addHook('beforeDefine', function (attributes) {
  _.each(_.keys(attributes), function (key) {
    if (typeof attributes[key] !== 'function') {
      attributes[key].field = _.snakeCase(key)
    }
  })
})

fs.readdirSync(`${__dirname}/models`)
.filter(function (file) {
  return (file.indexOf('.') !== 0) && (file !== path.basename(__filename)) && (file.slice(-3) === '.js')
})
.forEach(function (file) {
  const model = sequelize['import'](path.join(`${__dirname}/models`, file))
  db[model.name] = model
})

_.each(_.keys(db), function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
