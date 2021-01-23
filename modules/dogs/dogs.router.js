const express = require('express');
const json = require('body-parser').json()

const People = require('../people/people.service')

const router = express.Router()

const dogsList = [
  {Name: 'Freddy', Breed: 'Golden Retriever', Gender: 'Male', Description: 'A beautiful golden color, happy and kind', Age: '5yo', 'Journey To Us': 'Found wandering outside our door'},
  {Name: 'Bertha', Breed: 'Golden Retriever', Gender: 'Female', Description: 'A beautiful golden color, happy and kind', Age: '6yo', 'Journey To Us': 'Found wandering outside our door'},
  {Name: 'George', Breed: 'Golden Retriever', Gender: 'Male', Description: 'A beautiful golden color, happy and kind', Age: '7yo', 'Journey To Us': 'Found wandering outside our door'},
  {Name: 'Cassidy', Breed: 'Golden Retriever', Gender: 'Female', Description: 'A beautiful golden color, happy and kind', Age: '3yo', 'Journey To Us': 'Found wandering outside our door'},
  {Name: 'Bucky', Breed: 'Golden Retriever', Gender: 'Male', Description: 'A beautiful golden color, happy and kind', Age: '1yo', 'Journey To Us': 'Found wandering outside our door'}
];

router.get('/', (req, res) => {
  // Return all pets currently up for adoption.
  res.json(dogsList);
})

router.delete('/', json, (req, res) => {
  // Remove a pet from adoption.
})

module.exports = router
