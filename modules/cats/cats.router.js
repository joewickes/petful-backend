const express = require('express')
const json = require('body-parser').json()

const People = require('../people/people.service')

const router = express.Router()

const catsList = [
  {Name: 'Paul', Breed: 'Calico', Gender: 'Male', Description: 'A beautiful speckled color, happy and mischevious', Age: '1yo', 'Journey To Us': 'Found wandering outside our door'},
  {Name: 'Peggy', Breed: 'Calico', Gender: 'Female', Description: 'A beautiful speckled color, happy and mischevious', Age: '3yo', 'Journey To Us': 'Found wandering outside our door'},
  {Name: 'Frank', Breed: 'Calico', Gender: 'Male', Description: 'A beautiful speckled color, happy and mischevious', Age: '7yo', 'Journey To Us': 'Found wandering outside our door'},
  {Name: 'Katniss', Breed: 'Calico', Gender: 'Female', Description: 'A beautiful speckled color, happy and mischevious', Age: '5yo', 'Journey To Us': 'Found wandering outside our door'},
  {Name: 'Steve', Breed: 'Calico', Gender: 'Male', Description: 'A beautiful speckled color, happy and mischevious', Age: '2yo', 'Journey To Us': 'Found wandering outside our door'}
];

router.get('/', (req, res) => {
  // Return all pets currently up for adoption.
  res.json(catsList);
})

router.delete('/', json, (req, res) => {
  // Remove a pet from adoption.
})

module.exports = router
