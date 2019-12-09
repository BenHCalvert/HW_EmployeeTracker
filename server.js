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
    // Need to add list of roles from the eeDB into choices below
    choices: []
    },
    {
    type: 'list',
    name: 'employeeManager',
    message: "Who is this employee's manager?"
    // Need to add list of names of managers
    choices: []
    }      
];

const addRoleQ = [
{
    type: "input",
    name: "roleTitle",
    message: "Enter the name of the new role:"    
    },
    {
    type: "list",
    name: "roleDept",
    message: "Enter employee first name"
    },
    {
    type: 'list',
    name: 'employeeRole',
    // Need to add list of roles from the eeDB into choices below
    choices: []
    },
    {
    type: 'list',
    name: 'employeeManager',
    // Need to add list of names of managers
    choices: []
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
    message: 'Do you want to view departments, roles or employees?'
    // List of all departments
    choices: ['departments', 'roles', 'employees']
    }
];

const updateRoleQ = [
    {
    type: 'list',
    name: 'updateRole',
    // List of all Employees
    choices: []
    },
    {
    type: 'list',
    name: 'newRole',
    message: 'select the employees new role',
    // list of all roles
    choices: []

]

