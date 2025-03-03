var express = require('express');
var router = express.Router();
const request = require('request');

/* GET information's machine. */
router.get('/machine', (req, res, next) => {
  var machinenRequested = req.query.machine;
  console.log(machinenRequested);
  if (machinenRequested === undefined || machinenRequested === "") {
    return res.status(400).send("Machine ID is missing. Try again.");
  }
  request(`https://pokeapi.co/api/v2/machine/${machinenRequested}`, function (error, response, body) {
    if (body == "Not Found") {
      return res.status(404).send(`"${machinenRequested}" is not a machine ID.`);
    }
    return res.status(200).send(JSON.parse(body));
  });
});

/* GET information's berry. */
router.get('/berry', (req, res, next) => {
  var berryRequested = req.query.berry;
  console.log(berryRequested);
  if (berryRequested === undefined || berryRequested === "") {
    return res.status(400).send("Berry ID or name is missing. Try again.");
  }
  request(`https://pokeapi.co/api/v2/berry/${berryRequested}`, function (error, response, body) {
    if (body == "Not Found") {
      return res.status(404).send(`"${berryRequested}" is not a berry in pokemon world.`);
    }
    return res.status(200).send(JSON.parse(body));
  });
});

module.exports = router;
