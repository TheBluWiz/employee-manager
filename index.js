const inquirer = require("inquirer");
const mysql = require('mysql2');
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
);

const viewDepartments = function () {
    db.promise().query('SELECT name as Department, id as ID FROM departments;')
        .then(([rows, fields]) => {
            console.table(rows);
            actionChoice();
        })
        .catch(() => {
            console.log(`Here is the Error:
      ${err}`);
            actionChoice();
        })
}

const viewRoles = function () {
    db.promise().query('SELECT title as Title, roles.id as ID, departments.name as Department, salary as Salary FROM roles JOIN departments ON roles.department_id = departments.id;')
        .then(function ([rows, fields]) {
            console.table(rows)
            actionChoice();
        })
        .catch(() => {
            console.log(err)
            actionChoice();
        })
}

const viewEmployees = function () {
    db.promise().query('SELECT employees.id as ID, employees.first_name as FirstName, employees.last_name as LastName, roles.title as Role, departments.name as Department, roles.salary as Salary, CONCAT(emp.first_name, " ", emp.last_name) as Manager  FROM employees JOIN roles ON employees.role_id = roles.id JOIN departments ON roles.department_id = departments.id JOIN employees emp ON employees.manager_id = emp.id;')
        .then(function ([rows, fields]) {
            console.table(rows)
            actionChoice();
        })
        .catch(() => {
            console.log(err)
            actionChoice();
        })
}

const addDepartment = function () {
    inquirer.prompt([
        {
            type: "prompt",
            message: "What is the name of the department? ",
            name: "newDepartment"
        }
    ]).then((res) => {
        db.promise().query(`INSERT INTO departments (name) VALUES (?);`, res.newDepartment)
    }).then(function (err, res) {
        if (err) {
            console.log(err)
            actionChoice();
        }
        else {
            console.log("Department Added!")
            actionChoice();
        }
    })
}

const addRole = function () {
    let currentDepartmentsArray = [];
    let currentDepartmentsObj = {};
    db.promise().query('SELECT name as Department, id as ID FROM departments;')
        .then(function ([rows, fields]) {
            currentDepartmentsObj = rows;
            currentDepartmentsArray = [];
            let department_id;
            rows.map(function (element) {
                currentDepartmentsArray.push(element.Department)
            })
            inquirer.prompt([
                {
                    type: "prompt",
                    message: "What is the name of the role? ",
                    name: "title"
                },
                {
                    type: "prompt",
                    message: "What is the salary of the role? ",
                    name: "salary"
                },
                {
                    type: "list",
                    message: "Which department does the role belong to?",
                    choices: currentDepartmentsArray,
                    name: "department_id"
                },
            ]).then((res) => {
                currentDepartmentsObj.forEach(element => {
                    if (element.Department === res.department_id) department_id = element.ID;
                });
                db.promise().query(`INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`, [res.title, res.salary, department_id])
                    .then(function () {
                        console.log("Role Added");
                        actionChoice();
                    })
                    .catch(() => {
                        console.log(err)
                        actionChoice();
                    })
            })
        })
}

const addEmployee = function () {
    let roleList = [];
    let roleObj = {};
    let managerList = [];
    let managerObj = {};
    let role;
    let manager;

    db.promise().query('SELECT * FROM roles;')
        // Consider using promise all for these
        .then(function ([rows, fields]) {
            roleObj = rows;
            roleObj.map(function (element) {
                roleList.push(element.title)
            })
        }).then(() => {
            db.promise().query("Select CONCAT (first_name, ' ', last_name) as Manager, id as ID FROM employees WHERE role_id = 1")
                .then(function ([rows, fields]) {
                    managerObj = rows;
                    managerObj.map(function (element) {
                        managerList.push(element.Manager)
                    })

                    if (managerList.length < 1) managerList = ["null"]

                    inquirer.prompt([
                        {
                            type: "prompt",
                            message: "What is the employees first name? ",
                            name: "first_name"
                        },
                        {
                            type: "prompt",
                            message: "What is the employees last name? ",
                            name: "last_name"
                        },
                        {
                            type: "list",
                            message: "What is the employees role?",
                            choices: roleList,
                            name: "role",
                        },
                        {
                            type: "list",
                            message: "Who is the employees manager?",
                            choices: managerList,
                            name: "manager"
                        }
                    ])
                        .then((res) => {
                            managerObj.forEach(element => {
                                if (element.Manager === res.manager) manager = element.ID;
                            });
                            roleObj.forEach(element => {
                                if (element.title === res.role) role = element.id
                            })
                            db.promise().query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`, [res.first_name, res.last_name, role, manager])
                                .then(() => {
                                    console.log("Employee Added!");
                                    actionChoice();
                                })
                        })
                })
        })
}

const updateEmployee = function () {
    let employeeList = [];
    let employeeObject = {};
    let rolesList = [];
    let rolesObject = {};
    let employee;
    let role;
    
    db.promise().query('SELECT * FROM employees;')
    .then(function ([rows, fields]) {
        employeeObject = rows;
        employeeObject.map(function (element) {
            employeeList.push(`${element.first_name} ${element.last_name}`)
        })
        db.promise().query('SELECT * FROM roles;')
        .then(function ([rows, fields]) {
            rolesObject = rows;
            rolesObject.map(function (element) {
                rolesList.push(element.title)
            })
            inquirer.prompt([
                {
                    type: 'list',
                    message: "Which employee do you want to update? ",
                    choices: employeeList,
                    name: 'employee'
                },
                {
                    type: 'list',
                    message: 'Which role do you want to assign the selected employee? ',
                    choices: rolesList,
                    name: 'role'
                }
            ])
            .then((response) => {
                employeeObject.forEach(element => {
                    if ((`${element.first_name} ${element.last_name}`) === response.employee) employee = element.id;
                });

                rolesObject.forEach(element => {
                    if (element.title === response.role) role = element.id
                })

                db.promise().query('UPDATE employees SET role_id = ? WHERE id = ?;', [role, employee])
                .then((res, err) => {

                    console.log("Employee Updated!");
                    actionChoice();
                })
                .catch(() => {
                    console.log(err)
                })
            })
        })
    })
}

const actionChoice = function () {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'View All Departments',
                'View All Roles',
                'View All Employees',
                'Add Employee',
                'Update Employee Role',
                'Add Role',
                'Add Department',
                'Quit'],
            name: "action"
        }
    ]).then((response) => {
        switch (response.action) {
            case 'View All Departments':
                viewDepartments();
                break;
            case 'View All Roles':
                viewRoles();
                break;
            case 'View All Employees':
                viewEmployees();
                break;
            case 'Add Department':
                addDepartment();
                break;
            case 'Add Role':
                addRole();
                break;
            case 'Add Employee':
                addEmployee();
                break;
            case 'Update Employee Role':
                updateEmployee();
                break;
            case 'Quit':
                db.end(console.log("Exiting Application"))
                break;
        }
    })
}

actionChoice();