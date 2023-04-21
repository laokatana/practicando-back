CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee(
id int(11) not null auto_increment,
name varchar(45) default null,
salary int(11) default null,
primary key (id)

);

INSERT INTO employee VALUES
  (1,'Joe', 1000),
  (2,'Henry', 5000),
  (3,'Pipo', 2000),
  (4,'Terrazio', 3000);