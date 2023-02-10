#!/usr/bin/node
const secondBiggest = () => {
    const args = Array.from(arguments);
    if (args.length === 0) {
      console.log(0);
      return;
    }
    if (args.length === 1) {
      console.log(0);
      return;
    }
    args.sort((a, b) => b - a);
    console.log(args[1]);
  };
  