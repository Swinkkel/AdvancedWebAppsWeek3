var express = require('express');
var router = express.Router();

todos = [];

/* POST todos. */
router.post('/todo', function(req, res, next) {

    res.send('respond with a resource');
});

module.exports = router;
