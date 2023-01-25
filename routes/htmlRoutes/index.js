const path = require('path');
const router = require('express').Router();

//making the server navigate/navigation if putting in a URL
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/animals', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/animals.html'));
});

router.get('/zookeepers', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
});

//"*" acts as a wildcard; any route that wasn't previously defined will fall under
  //this request & will receive the homepage as the response
 //Order of routes matters! The * route should ALWAYS come last. Otherwise, it 
  //will take precedence over named routes, and you won't see what you expect
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});



module.exports = router;