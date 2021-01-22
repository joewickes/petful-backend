const express = require('express')
const json = require('body-parser').json()

const People = require('../people/people.service')

const router = express.Router()

router.get('/', (req, res) => {
  // Return all pets currently up for adoption.
  res.send('DOGS ARE RETURNING FROM GET');
})

router.delete('/', json, (req, res) => {
  // Remove a pet from adoption.
})

module.exports = router
