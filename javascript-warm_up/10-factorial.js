#!/usr/bin/node
const factorial = (num) => {
    if (isNaN(num) || num < 0) {
      return 1;
    }
  
    if (num === 0) {
      return 1;
    }
  
    return num * factorial(num - 1);
  };
  
  console.log(factorial(Number(process.argv[2])));
  
  