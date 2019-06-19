const app = (require('express'))()
const bodyParser = require('body-parser')

const userRoutes = require('route/user')
const skillRoutes = require('route/skill')
const advertRoutes = require('route/advert')

app.use(bodyParser.json())

app.use('/', userRoutes)
app.use('/', skillRoutes)
app.use('/', advertRoutes)

module.exports = app
