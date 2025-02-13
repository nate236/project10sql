INSERT INTO department (name) VALUES ('Engineering'), ('HR'), ('Sales');

INSERT INTO role (title, salary, department_id) VALUES 
('Software Engineer', 90000, 1), 
('HR Manager', 75000, 2), 
('Sales Representative', 60000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('Alice', 'Johnson', 1, NULL),
('Bob', 'Smith', 2, NULL),
('Charlie', 'Davis', 3, 1);
