INSERT INTO departments (d_name)
VALUES ("Product Zone"),
        ("Genius Bar"),
        ("Backstage"),
        ("People");

INSERT INTO roles (title, salary, d_id)
VALUES ("Specialist", 20.00, 1),
        ("Expert", 22.00, 1),
        ("Pro", 24.00, 1),
        ("Technical Specialist", 21.00, 2),
        ("Technical Expert", 23.00, 2),
        ("Genius", 26.50, 2),
        ("Ops Specialist", 20.00, 3),
        ("Ops Expert", 22.00, 3),
        ("Scheduler", 22.00, 4),
        ("Lead", 30.00, 4),
        ("Lead Genius", 35.00, 4),
        ("Manager", 38.00, 4),
        ("Senior Manager", 44.00, 4);

INSERT INTO employees (first_name, last_name, r_id, m_id)
Values ("John", "Young", 13, 1), 
        ("Angela", "Julian", 12, 1), 
        ("Jehyun", "Jung", 12, 1),
        ("Jessica", "", 12, 1),
        ("Nick", "Gambino", 12, 1),
        ("Jamey", "Wicklund", 6, 5), 
        ("Ravi", "Nagi", 6, 5),
        ("Rhys", "Smoker", 4, 5),
        ("Tristan", "L", 7, 4),
        ("Carrie", "Young", 5, 5);
