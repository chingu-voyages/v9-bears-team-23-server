const app = (require('express'))()
const bodyParser = require('body-parser')

const userRoutes = require('route/user')

app.use(bodyParser.json())

app.use('/', userRoutes)

module.exports = app
