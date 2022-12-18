INSERT INTO departments (name)
VALUES ("Grocery"),
        ("Electronics"),
        ("Shipping"),
        ("Home Goods"),
        ("People");

INSERT INTO roles (title, salary, department_id)
VALUES ("Manager", 100000, 4),
        ("Sales", 40000, 4),
        ("Grocer", 40000, 1),
        ("Freight Handler", 40000, 3),
        ("Repair", 45000, 2);
        

INSERT INTO employees (first_name, last_name, role_id, manager_id)
Values ("John", "Young", 1, 1), 
        ("Angela", "Julian", 1, 1), 
        ("Jehyun", "Jung", 1, 1),
        ("Jessica", "", 1, 1),
        ("Nick", "Gambino", 1, 1),
        ("Jamey", "Wicklund", 2, 2), 
        ("Ravi", "Nagi", 3, 3),
        ("Rhys", "Smoker", 4, 4),
        ("Tristan", "L", 5, 5);
