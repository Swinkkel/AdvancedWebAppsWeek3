var express = require('express');
var router = express.Router();

let todosArray = [];

/* GET todos listing. */
router.get('/', function(req, res, next) {
    res.send('users: respond with a resource');
  });

// Data from form.
router.post('/', function(req, res, next) {
    const { name } =  req.body;
    const { task } = req.body;

    const entry = todosArray.find(entry => entry.name === name);
    if (entry) {
        entry.todos.push(task);
        res.json( "{ status: 'Todo added' }" );
    }
    else {
        todosArray.push({name: name, todos: [task]});
        res.json( "{ status: 'User added'}");
    }
});

module.exports = { todosArray, router };
