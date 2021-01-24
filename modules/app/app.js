const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors());

app.use('/api/people', require('../people/people.router'))
app.use('/api/cats', require('../cats/cats.router'))
app.use('/api/dogs', require('../dogs/dogs.router'))

module.exports = app;
