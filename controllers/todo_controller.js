var express = require('express');
var todo = require('../models/todo.js');

var router = express.Router();

router.get('/', (req, res) => {
	// res.json(todo.getAll(console.log));
	todo.getAll(function(data) {
		var handlebarsObject = {
			todos: data,
		}
		console.log(handlebarsObject);
		res.render('index', handlebarsObject);
	});
})

router.post('/api/todos', (req, res) => {
	// res.json(todo.create(req, res))
	todo.create(req.body.todo, (results) => {
		console.log(results);
		res.redirect("/");
	});
})

router.put('/api/todos/:id', (req, res) => {
	// res.json(todo.create(req, res))
	todo.complete(req.params.id, (results) => {
		console.log(results);
		res.sendStatus(200);
	});
})

module.exports = router;