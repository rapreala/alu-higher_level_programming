#!/usr/bin/node
const data = require('./101-data.js');
const dict = data.dict;

const occurrences = {};
for (const userId in dict) {
  if (!occurrences[dict[userId]]) {
    occurrences[dict[userId]] = [];
  }
  occurrences[dict[userId]].push(userId);
}

console.log(occurrences);
