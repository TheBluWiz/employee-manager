DROP DATABASE IF EXISTS employee_list_db;
CREATE DATABASE employee_list_db;

USE employee_list_db;

CREATE TABLE departments (
    d_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    d_name VARCHAR(50)
);

CREATE TABLE roles (
    r_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    salary DEC(10, 2),
    d_id INT NOT NULL,
    FOREIGN KEY (d_id)
    REFERENCES departments(d_id)
);

CREATE TABLE employees (
    e_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    r_id INT,
    m_id INT,
    FOREIGN KEY (r_id)
    REFERENCES roles(r_id),
    FOREIGN KEY (m_id)
    REFERENCES employees(e_id)
);

