const app = (require('express'))()
const bodyParser = require('body-parser')

const userRoutes = require('route/user')
const skillRoutes = require('route/skill')

app.use(bodyParser.json())

app.use('/', userRoutes)
app.use('/', skillRoutes)

module.exports = app
