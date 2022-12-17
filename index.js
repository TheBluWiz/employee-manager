const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require('console.table');

const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: '',
        database: 'employee_list_db'
    },
    console.log(`Connected to the employee_list_db.`)
);

const viewDepartments = function () {
    db.query('SELECT name as Deparment, id as ID FROM departments;', function (err, res) {
        err ? console.log(err) : console.table(res)
    });
}

const viewRoles = function () {
    db.query('SELECT title as Title, roles.id as ID, departments.name as Department, salary as Salary FROM roles JOIN departments ON roles.department_id = departments.id;', function (err, res) {
        err ? console.log(err) : console.table(res)
    });
}

const viewEmployees = function () {
    db.query('SELECT employees.id as ID, first_name as FirstName, last_name as LastName, roles.title as Role, departments.name as Department, roles.salary as Salary, employees.manager_id as Manager  FROM employees JOIN roles ON employees.role_id = roles.id JOIN departments ON roles.department_id = departments.id;', function (err, res) {
        err ? console.log(err) : console.table(res)
    });
}

const actionArray = [
    {
        type: 'list',
        message: 'What would you like to do?',
        choices: [
            'View All Employees',
            'Add Employee',
            'Update Employee Role',
            'View All Roles',
            'Add Role',
            'View All Departments',
            'Add Department',
            'Quit'],
        name: "action"
    }
]

const actionChoice = function () {
    inquirer.prompt(actionArray).then((response) => {
        switch (response.action) {
            case 'View All Employees':
                viewEmployees();
                actionChoice();
                break;
            case 'Add Employee':
                // addEmployee();
                console.log("Added Employee");
                actionChoice();
                break;
            case 'Update Employee Role':
                // updateRole();
                console.log("Updated Employee Role");
                actionChoice();
                break;
            case 'View All Roles':
                viewRoles();
                console.log("Viewed Roles");
                actionChoice();
                break;
            case 'Add Role':
                // addRole();
                console.log("Added Role");
                actionChoice();
                break;
            case 'View All Departments':
                viewDepartments();
                actionChoice();
                break;
            case 'Add Department':
                // addDepartment();
                console.log("Added Department");
                actionChoice();
                break;
            case 'Quit':
                db.end(console.log("Exiting Application"))
                break;
        }

    })
}

actionChoice();