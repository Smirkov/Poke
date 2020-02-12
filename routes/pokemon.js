var express = require('express');
var router = express.Router();
const request = require('request');

/* GET information's pokemon. */
router.get('/pokemon', (req, res, next) => {
  var pokemonRequested = req.query.pokemon;
  console.log(pokemonRequested);
  if (pokemonRequested === undefined || pokemonRequested === "") {
    return res.status(400).send("Pokemon name is missing. Try again.");
  }
  request(`https://pokeapi.co/api/v2/pokemon/${pokemonRequested}`, function (error, response, body) {
   /*  console.error('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body); */
    if (body == "Not Found") {
      return res.status(404).send(`"${pokemonRequested}" is not a pokemon.`);
    }
    return res.status(200).send(body);
  });
});

/* GET information's berry. */
router.get('/berry', (req, res, next) => {
  var berryRequested = req.query.berry;
  console.log(berryRequested);
  if (berryRequested === undefined || berryRequested === "") {
    return res.status(400).send("Berry name is missing. Try again.");
  }
  request(`https://pokeapi.co/api/v2/berry/${berryRequested}`, function (error, response, body) {
    /* console.error('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body); */
    if (body == "Not Found") {
      return res.status(404).send(`"${berryRequested}" is not a berry in pokemon world.`);
    }
    return res.status(200).send(body);
  });
});

module.exports = router;
