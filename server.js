// ********************************
// Set up connection to server & db
// ********************************

const express = require("express");
const connection = require("./config/connection.js");
const PORT = process.env.PORT || 8080;
const app = express();

// Parse application body
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// Import routes and give the server access to them.
var routes = require("./controllers/Controller.js");

// app.use(routes);

// Start server so it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

// ********************************
// Variables to hold lists to pipe into questions
// ********************************

let allRoles = "SELECT title FROM ee_role";
let managerID = "SELECT manager_id FROM employee";
let allEmployees = "SELECT first_name, last_name FROM employee";






// ********************************
// Variables to Hold Inquirer Questions
// ********************************

const startQuestion = [    
{
    type: "list",
    name: "action",
    message: "Welcome to the HRIS. What do you want to do",
    choices: ["Add departments, roles or employees", "View departments, roles or employees", "Update employee role"]
}
];
const addQuestions = [
{
    type: "list",
    name: "addType",
    message: "What do you want to add",
    choices: ["department", "role", "employee"]
    },
];

const changeQuestions = [
{
    type: "list",
    name: "addType",
    message: "What do you want to change",
    choices: ["department", "role", "employee"]
    },
];
const addEmpQ = [
{
    type: "input",
    name: "firstName",
    message: "Enter employee first name"    
    },
    {
    type: "input",
    name: "lastName",
    message: "Enter employee first name"
    },
    {
    type: 'list',
    name: 'employeeRole',
    message: "What is this employee's role?",
    choices: allRoles
    },
    {
    type: 'list',
    name: 'employeeManager',
    message: "Who is this employee's manager?",
    choices: managerID
    }      
];

const addRoleQ = [
{
    type: "input",
    name: "roleTitle",
    message: "Enter the name of the new role:"    
}     
];

const addDeptQ = [
    {
    type: "input",
    name: "deptTitle",
    message: "Enter the name of the new department:"    
    }           
];

const viewQ = [
    {
    type: 'list',
    name: 'viewTableSelector',
    message: 'Do you want to view departments, roles or employees?',
    choices: ['departments', 'roles', 'employees']
    }
];

const updateRoleQ = [
    {
    type: 'list',
    name: 'updateRole',
    message: "Which employee's role do you wish to update?",
    choices: allEmployees
    },
    {
    type: 'list',
    name: 'newRole',
    message: "select the employee's new role",
    // list of all roles
    choices: allRoles
    }
]

