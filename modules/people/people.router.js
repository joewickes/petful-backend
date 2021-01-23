const express = require('express')
const json = require('body-parser').json()

const People = require('./people.service')

const router = express.Router()

const peopleList = [
  'name1', 
  'name2', 
  'name3', 
  'name4', 
  'name5', 
  'name6'
]

router.get('/', (req, res) => {
  // Return all the people currently in the queue.
  res.json(peopleList);
})

router.post('/', json, (req, res) => {
  // Add a new person to the queue.
})

module.exports = router
