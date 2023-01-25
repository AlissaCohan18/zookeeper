const router = require("express").Router();
const { filterByQuery, findById, createNewAnimal, validateAnimal,} = require("../../lib/animals");
// use {var-name} since animals is located inside the json object (ie 'named array')
  //note: var-name has to be the same as what's inside the json object
  //destructure
const { animals } = require("../../data/animals");

router.get("/animals", (req, res) => {
  let results = animals;
  if (req.query) {
    //req.query: multifaceted, often combining multiple parameters
    results = filterByQuery(req.query, results);
  }
  res.json(results);
});

router.get("/animals/:id", (req, res) => {
  //req.params: specific to a single property/to retrieve a single record
  const result = findById(req.params.id, animals);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

router.post("/animals", (req, res) => {
  // set id based on what the next index of the array will be
  req.body.id = animals.length.toString();
  // if any data in req.body is incorrect, send 400 error back
  if (!validateAnimal(req.body)) {
    res.status(400).send("The animal is not properly formatted.");
  } else {
    // add animal to json file and animals array in this function
    const animal = createNewAnimal(req.body, animals);
    res.json(animal);
  }
});


module.exports = router;
