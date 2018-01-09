DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	task_id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
  devoured BOOLEAN,
  date 
	PRIMARY KEY (task_id)
);
