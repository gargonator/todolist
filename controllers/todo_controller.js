var express = require('express');
var todo = require('../models/todo.js');

var router = express.Router();

router.get('/', (req, res) => {
	res.json(todo.all(console.log));
})

router.post('/api/todos', (req, res) => {
	res.json(todo.create(req, res))
})

module.exports = router;