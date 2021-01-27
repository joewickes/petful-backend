const express = require('express');
const json = require('body-parser').json();

const Queue = require('./../queue/Queue');

const router = express.Router()

const peopleList = [
  'Frank', 
  'Henry', 
  'George', 
  'Sarah', 
  'Sally'
];

router.get('/', (req, res) => {
  // Return all pets currently up for adoption.

  const peopleL = new Queue;

  peopleList.forEach(obj => {
    peopleL.enqueue(obj);
  });

  const people = [];
  const len = peopleL.length();
  for (let i = 0; i < len; i++) {
    people.push(peopleL.dequeue());
  }

  res.json(people);
})

module.exports = router
