// import the model which is an abstraction of the ORM
var express = require('express');
var todo = require('../models/todo.js');

var router = express.Router();

// route for populating all of the current to dos in the database on home page load
router.get('/', (req, res) => {
	todo.getAll(function(data) {
		var handlebarsObject = {
			todos: data,
		}
		// console.log(handlebarsObject);
		res.render('index', handlebarsObject);
	});
})

// route for creating a new to do
router.post('/api/todos', (req, res) => {
	todo.create(req.body.todo, (results) => {
		// console.log(results);
		res.redirect("/");
	});
})

// route for completing a to do
router.put('/api/todos/:id', (req, res) => {
	todo.complete(req.params.id, (results) => {
		// console.log(results);
		res.sendStatus(200);
	});
})

// export routes so other files can use
module.exports = router;