const express = require('express');
const json = require('body-parser').json();

const Queue = require('./../queue/Queue');

const router = express.Router();

const catsList = [
  {Name: 'Paul', Breed: 'Calico', Gender: 'Male', Description: 'Eager to play', Age: '1yo', 'Journey To Us': 'Found in a tree'},
  {Name: 'Peggy', Breed: 'Calico', Gender: 'Female', Description: 'A beautiful speckled color, happy and mischevious', Age: '3yo', 'Journey To Us': 'Found near the woods'},
  {Name: 'Frank', Breed: 'Calico', Gender: 'Male', Description: 'Likes to hang out on tall objects', Age: '7yo', 'Journey To Us': 'Found in an apartment complex'},
  {Name: 'Katniss', Breed: 'Calico', Gender: 'Female', Description: 'Mostly awake at night', Age: '5yo', 'Journey To Us': 'Found at an abandoned farm'},
  {Name: 'Steve', Breed: 'Calico', Gender: 'Male', Description: 'Young and full of energy', Age: '2yo', 'Journey To Us': 'Found sitting on our doorstep'}
];

router.get('/', (req, res) => {
  // Return all pets currently up for adoption.
  const cats = [];

  const catsL = new Queue;

  catsList.forEach(cat => {
    return catsL.enqueue(cat);
  });

  const len = catsL.length();
  for (let i = 0; i < len; i++) {
    cats.push(catsL.dequeue());
  }

  res.json(cats);
})

router.delete('/', json, (req, res) => {
  // Remove a pet from adoption.
})

module.exports = router
