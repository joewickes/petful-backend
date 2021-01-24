const express = require('express');
const json = require('body-parser').json();

const Queue = require('./../Queue/Queue');

const router = express.Router()

const peopleList = [
  'name1', 
  'name2', 
  'name3', 
  'name4', 
  'name5', 
  'name6'
];

const peopleL = new Queue;

peopleList.forEach(obj => {
  peopleL.enqueue(obj);
});

router.get('/', (req, res) => {
  // Return all the people currently in the queue.
  res.json(peopleList);
})

module.exports = router
