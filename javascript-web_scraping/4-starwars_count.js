#!/usr/bin/node
const request = require('request');

const API_URL = process.argv[2];
const characterID = 18;

request(API_URL, function (error, response, body) {
  if (error) {
    console.error('error:', error);
    return;
  }

  const films = JSON.parse(body).results;
  let count = 0;

  films.forEach((film) => {
    film.characters.forEach((character) => {
      if (character.includes(characterID.toString())) {
        count++;
      }
    });
  });

  console.log(count);
});
