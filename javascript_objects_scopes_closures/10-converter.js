#!/usr/bin/node
const converter = base => {
    return number => {
      return number.toString(base);
    };
  };
  
  exports.converter = converter;
  