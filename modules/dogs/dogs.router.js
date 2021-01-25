const express = require('express');
const json = require('body-parser').json()

const Queue = require('./../queue/Queue');

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
  const dogs = [];

  const dogsL = new Queue;

  dogsList.forEach(obj => {
    dogsL.enqueue(obj);
  });

  const len = dogsL.length();
  for (let i = 0; i < len; i++) {
    dogs.push(dogsL.dequeue());
  }

  res.json(dogs);
})

module.exports = router
