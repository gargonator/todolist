var connection = require('./connection.js')

// define ORM functions to query database
var orm = {

	selectAll: function selectAll(cb) {
		connection.query(`SELECT * FROM todolist`, (err, results) => {
			if (err) throw err;
			cb(results);
		});
	},

	insertOne: function insertOne(todo, cb) {
		connection.query(`INSERT INTO todolist (item_name, done) VALUES (?, ?)`, [todo,0], (err, results) => {
			if (err) throw err;
			cb(results);
		})

	},

	updateOne: function updateOne(id, todo, cb) {
		connection.query(`UPDATE todolist SET item_name = ? WHERE id = ?`, [todo, id], (err, results) => {
			if (err) throw err;
			cb(results);
		})
	},

	completeOne: function completeOne(id, cb) {
		connection.query(`UPDATE todolist SET done = ? WHERE id = ?`, [1, id], (err, results) => {
			if (err) throw err;
			cb(results);
		})
	}
};

module.exports = orm;

// testing
// orm.selectAll();
// orm.insertOne('A new to do');
// orm.updateOne(3, 'Finish bootcamp HW');
// orm.completeOne(4);