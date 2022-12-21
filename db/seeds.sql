INSERT INTO departments (name)
VALUES ("People"),
        ("Sales"),
        ("Engineering"),
        ("Finance"),
        ("Legal");

INSERT INTO roles (title, salary, department_id)
VALUES ("Manager", 120000, 1),
        ("Scheduler", 75000, 1),
        ("Sales", 75000, 2),
        ("Front End", 100000, 3),
        ("Back End", 120000, 3),
        ("DevOps", 125000, 3),
        ("Accountant", 125000, 4),
        ("Payroll Clerk", 75000, 4),
        ("Lawyer", 190000, 5);
        

INSERT INTO employees (first_name, last_name, role_id, manager_id)
Values ("Albus", "Dumbledore", 1, 1), 
        ("Minerva", "McGonagall", 1, 1), 
        ("Filius", "Flitwick", 1, 1),
        ("Severus", "Snape", 1, 1),
        ("Pomona", "Sprout", 1, 1),
        ("Rubeus", "Hagrid", 5, 2), 
        ("Argus", "Filtch", 3, 5),
        ("Percy", "Weasley", 4, 2),
        ("Harry", "Potter", 6, 2),
        ("Draco", "Malfoy", 9, 4),
        ("Padma", "Patil", 8, 3),
        ("Cedric", "Diggory", 6, 2);