#!/usr/bin/node
const add = (a, b) => {
    console.log(parseInt(a) + parseInt(b));
  };
  
  const firstInt = process.argv[2];
  const secondInt = process.argv[3];
  
  if (isNaN(firstInt) || isNaN(secondInt)) {
    console.log('Both arguments must be integers.');
  } else {
    add(firstInt, secondInt);
  }
  