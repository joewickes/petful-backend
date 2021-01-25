const express = require('express');
const json = require('body-parser').json();

const Queue = require('./../Queue/Queue');

const router = express.Router()

const peopleList = [
  'name1', 
  'name2', 
  'name3', 
  'name4', 
  'name5'
];

const peopleL = new Queue;

peopleList.forEach(obj => {
  peopleL.enqueue(obj);
});

router.get('/', (req, res) => {
  // Return all pets currently up for adoption.
  const people = [];
  const len = peopleL.length();
  for (let i = 0; i < len; i++) {
    people.push(peopleL.dequeue());
  }

  res.send(people);
})

module.exports = router
