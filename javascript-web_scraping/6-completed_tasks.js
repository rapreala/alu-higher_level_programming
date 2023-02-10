#!/usr/bin/node
const request = require('request');
const url = process.argv[2];

request(url, function (error, response, body) {
  if (error) {
    console.error('error:', error);
    return;
  }

  const tasks = JSON.parse(body);
  const userTasks = {};

  for (const task of tasks) {
    if (task.completed) {
      if (!userTasks[task.userId]) {
        userTasks[task.userId] = 0;
      }
      userTasks[task.userId]++;
    }
  }

  for (const userId in userTasks) {
    console.log(`User ${userId} has completed ${userTasks[userId]} task(s)`);
  }
});
