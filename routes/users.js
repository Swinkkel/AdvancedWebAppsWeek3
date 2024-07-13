var express = require('express');
var router = express.Router();

let {todosArray} = require('./todo.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('users: respond with a resource');
});

router.get('/:id', function(req, res, next) {
  const name = req.params.id;

  console.log("test: " + name);

  const entry = todosArray.find(entry => entry.name === name);
  if (entry) {
      console.log("found: " + entry);
      res.json(entry);
  }
  else {
      res.json({ text: 'User not found' });
  }
});

router.delete('/:id', function(req, res, next) {
  const userName = req.params.id;

  const index = todosArray.indexOf(userName);
  if (userName && index) {
      console.log("User deleted");
      todosArray.splice(index, 1);
      res.json( { text: 'User deleted' } );
  }
  else {
      console.log("Failed to delete. User not found.");
      res.json( { text: 'User not found' } );
  }
});

module.exports = router;
