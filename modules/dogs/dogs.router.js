const express = require('express');
const json = require('body-parser').json()

const Queue = require('./../queue/Queue');

const router = express.Router()

const dogsList = [
  {Name: 'Freddy', Breed: 'Golden Retriever', Gender: 'Male', Description: 'Spunky and nice', Age: '5yo', 'Journey To Us': 'Found near an old farm'},
  {Name: 'Bertha', Breed: 'Golden Retriever', Gender: 'Female', Description: 'Calm and smiley', Age: '6yo', 'Journey To Us': 'Found next to a movie theater'},
  {Name: 'George', Breed: 'Golden Retriever', Gender: 'Male', Description: 'A beautiful golden color, happy and kind', Age: '7yo', 'Journey To Us': 'Found in the country'},
  {Name: 'Cassidy', Breed: 'Golden Retriever', Gender: 'Female', Description: 'Likes to lay around by your feet', Age: '3yo', 'Journey To Us': 'Found wandering outside our door'},
  {Name: 'Bucky', Breed: 'Golden Retriever', Gender: 'Male', Description: 'Never stops playing fetch', Age: '1yo', 'Journey To Us': 'Found sitting outside at a firehouse'}
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
