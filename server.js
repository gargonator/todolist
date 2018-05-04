var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var routes = require('./controllers/todo_controller.js');

var PORT = process.env.PORT || 3000;

var app = express();

// set up body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set up handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// give app access to routes
app.use(routes);

// start listening to port
app.listen(PORT, () => {
	console.log('Listening on port ' + PORT + '...');
});

