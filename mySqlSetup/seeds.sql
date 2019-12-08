-- Create Department Seeds
-- *********************************************************************
INSERT INTO department (dept_name) VALUES ("engineering");
INSERT INTO department (dept_name) VALUES ("facilities");
INSERT INTO department (dept_name) VALUES ("sales");
INSERT INTO department (dept_name) VALUES ("finance");


-- Create Role Seeds
-- *********************************************************************
INSERT INTO ee_role (title, deparment_id, salary) VALUES ("engineer", 1, 100000);
INSERT INTO ee_role (title, deparment_id, salary) VALUES ("sr engineer", 1, 175000);
INSERT INTO ee_role (title, deparment_id, salary) VALUES ("jr engineer", 1, 90000);
INSERT INTO ee_role (title, deparment_id, salary) VALUES ("custodian", 2, 50000);
INSERT INTO ee_role (title, deparment_id, salary) VALUES ("sales manager", 3, 125000);
INSERT INTO ee_role (title, deparment_id, salary) VALUES ("sales associate", 3, 80000);
INSERT INTO ee_role (title, deparment_id, salary) VALUES ("controller", 4, 120000);
INSERT INTO ee_role (title, deparment_id, salary) VALUES ("accountant", 4, 90000);
INSERT INTO ee_role (title, deparment_id, salary) VALUES ("finance director", 4, 200000);


-- Create Employee Seeds
-- *********************************************************************
-- Manager ID FYI: reference to another employee that manager of the current employee. This field may be null if the employee has no manager
-- Engineering Dept
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ( "Ben", "Calvert", 1, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ( "John", "Calvert", 2, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ( "Willet", "Calvert", 3, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ( "Nate", "Calvert", 1, 2);
-- Finance Dept
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ( "Kristine", "McCormick", 9, 10);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ( "Apple", "McCormick", 7, 10);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ( "Clementine", "McCormick", 8, 10);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ( "Orange", "McCormick", 8, 10);
-- Sales Dept
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ( "Asparagus", "Smith", 5, 21);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ( "Broccoli", "Smith", 6, 21);
-- Facilities Dept
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ( "Cactus", "Johnson", 4, 10);