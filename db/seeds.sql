INSERT INTO departments (name)
VALUES ("People"),
        ("Teachers"),
        ("Operations"),
        ("Students");

INSERT INTO roles (title, salary, department_id)
VALUES ("Manager", 25000, 1),
        ("Transfiguration", 10000, 2),
        ("Charms", 10000, 2),
        ("Potions", 10000, 2),
        ("Herbology", 10000, 2),
        ("Grounds Keeper", 10000, 3),
        ("Care Taker", 10000, 3),
        ("Head Boy", 0, 4),
        ("Student", -500, 4);
        

INSERT INTO employees (first_name, last_name, role_id, manager_id)
Values ("Albus", "Dumbledore", 1, 1), 
        ("Minerva", "McGonagall", 2, 1), 
        ("Filius", "Flitwick", 3, 1),
        ("Severus", "Snape", 4, 1),
        ("Pomona", "Sprout", 5, 1),
        ("Rubeus", "Hagrid", 6, 1), 
        ("Argus", "Filtch", 7, 1),
        ("Percy", "Weasley", 8, 2),
        ("Harry", "Potter", 9, 2),
        ("Draco", "Malfoy", 9, 4),
        ("Padma", "Patil", 9, 3),
        ("Cedric", "Diggory", 8, 5);
