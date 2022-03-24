const express = require('express')
const bodyParser = require('body-parser')

const PORT = 4000
const HOST = '0.0.0.0'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require('./controllers/authControllers')(app)

app.listen(PORT, HOST)
