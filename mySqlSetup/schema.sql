DROP DATABASE IF EXISTS eeDB;
CREATE database eeDB;

USE eeDB;

CREATE TABLE department (
  id INT NOT NULL,
  dept_name VARCHAR(30) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE ee_role (
  id INT NOT NULL,
  title VARCHAR(30) NULL,
  department_id INT NULL,
  salaryDECIMAL(10,4) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT NOT NULL,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT NULL,
  manager_id INT NULL,  
  PRIMARY KEY (id)
);
