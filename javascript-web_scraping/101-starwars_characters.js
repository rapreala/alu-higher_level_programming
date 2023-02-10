#!/usr/bin/node
const request = require('request');

const movieId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error(`Invalid status code: ${response.statusCode}`);
    return;
  }

  const movie = JSON.parse(body);
  const characterUrls = movie.characters;

  let characterIndex = 0;
  function getNextCharacter () {
    if (characterIndex >= characterUrls.length) {
      return;
    }

    const characterUrl = characterUrls[characterIndex];
    characterIndex++;

    request(characterUrl, (error, response, body) => {
      if (error) {
        console.error(error);
        getNextCharacter();
        return;
      }

      if (response.statusCode !== 200) {
        console.error(`Invalid status code: ${response.statusCode}`);
        getNextCharacter();
        return;
      }

      const character = JSON.parse(body);
      console.log(character.name);
      getNextCharacter();
    });
  }

  getNextCharacter();
});
