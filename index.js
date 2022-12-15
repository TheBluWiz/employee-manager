const inquirer = require("inquirer");
const mysql = require("mysql2");

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

const viewEmployees = function () {
    db.query('SELECT * FROM employees', function (err, res) {
        err ? console.log(err) : console.log(res)
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
                console.log("Viewed Employees");
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
                // viewRoles();
                console.log("Viewed Roles");
                actionChoice();
                break;
            case 'Add Role':
                // addRole();
                console.log("Added Role");
                actionChoice();
                break;
            case 'View All Departments':
                // viewDepartments();
                console.log("Viewed Departments");
                actionChoice();
                break;
            case 'Add Department':
                // addDepartment();
                console.log("Added Department");
                actionChoice();
                break;
            case 'Quit':
                console.log("Exiting Application")
                break;
        }

    })
}

actionChoice();