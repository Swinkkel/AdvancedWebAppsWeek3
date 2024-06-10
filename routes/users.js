var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("users function");
  res.send('users: respond with a resource');
});

module.exports = router;
