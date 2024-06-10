var express = require('express');
var router = express.Router();

let todos = [];

/* GET users listing. */
router.post('/', function(req, res, next) {
    console.log("todo function");
    console.log(req.body);
    const username = req.body['input-name'];
    const task = req.body['input-task'];
  
    console.log(username);
    console.log(task);

    const keys = todos.keys();

    const userObject = todos.find(item => item.name === username);
    if (userObject) {
        userObject.todos.push(task);
        res.send('Todo added');
    }
    else {
        const newUser = {
            name: username,
            todos: [task]
        };
        todos.push(newUser);
        res.send('User added');
    }
});

module.exports = router;
