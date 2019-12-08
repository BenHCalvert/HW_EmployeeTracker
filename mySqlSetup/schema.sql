DROP DATABASE IF EXISTS eeDB;
CREATE database eeDB;

USE eeDB;

CREATE TABLE department (
  id INT AUTO_INCREMENT NOT NULL,
  dept_name VARCHAR(30) NULL,
  PRIMARY KEY (id)
);

  

CREATE TABLE ee_role (
  id INT AUTO_INCREMENT NOT NULL,
  title VARCHAR(30) NULL,
  department_id INT NULL,
  salary DECIMAL(10,4) NULL,
  dept_id int NOT NULL,
  FOREIGN KEY (dept_id) REFERENCES department (id),
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT NULL,
  manager_id INT NULL,
  title_id INT NULL,
  CONSTRAINT for_id FOREIGN KEY(title_id) REFERENCES ee_role (id),  
  PRIMARY KEY (id)
);
