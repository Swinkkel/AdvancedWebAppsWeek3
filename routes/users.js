var express = require('express');
const req = require('express/lib/request');
var router = express.Router();

let {todosArray} = require('./todo.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('users: respond with a resource');
});

router.get('/:id', function(req, res, next) {
  const { name } = req.body;

  const entry = todosArray.find(entry => entry.name === name);
  if (entry) {
      console.log(entry);
      res.json( "{ status: 'User found' }" );
  }
  else {
      console.log(entry);
      res.json( "{ status: 'User not found' }" );
  }
});

router.delete('/:id', function(req, res, next) {
  const userName = req.params.id;

  const index = todosArray.indexOf(userName);
  if (index) {
      todosArray.splice(index, 1);
      res.json( "{ status: 'User found' }" );
  }
  else {
      res.send('User not found');
      res.json( "{ status: 'User not found' }" );
  }
});

module.exports = router;
