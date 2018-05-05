var orm = require('../config/orm.js');

var todo = {

	getAll: function(cb) {
		orm.selectAll(cb);
	},

	create: function(todo, cb) {
		orm.insertOne(todo, cb);
	},

	update: function(id, todo, cb) {
		orm.updateOne(id, todo, cb);
	},

	complete: function(id, cb) {
		orm.completeOne(id, cb);
	},
}

module.exports = todo;
