DROP DATABASE IF EXISTS todo_db;
CREATE DATABASE todo_db;
USE todo_db;

CREATE TABLE todolist (
	id INT AUTO_INCREMENT,
	item_name VARCHAR(255),
	done BOOLEAN,
	PRIMARY KEY (id)
);