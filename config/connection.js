const mysql = require('mysql');

// initialize database connection
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'todo_db'
});

// display message depending on whether connection is successful
connection.connect((err) => {
	if (err) {
		console.error('error connecting: ' + err.stack);
	} else {
		console.log('connected as id: ' + connection.threadId);
	}
});

// export connection
module.exports = connection;