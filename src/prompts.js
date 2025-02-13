const inquirer = require('inquirer');

const mainMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: [
                'View All Departments',
                'View All Roles',
                'View All Employees',
                'Add a Department',
                'Add a Role',
                'Add an Employee',
                'Update Employee Role',
                'Exit'
            ]
        }
    ]);
};

const departmentPrompt = () => {
    return inquirer.prompt([
        { type: 'input', name: 'name', message: 'Enter department name:' }
    ]);
};

const rolePrompt = (departments) => {
    return inquirer.prompt([
        { type: 'input', name: 'title', message: 'Enter role title:' },
        { type: 'input', name: 'salary', message: 'Enter role salary:' },
        {
            type: 'list',
            name: 'department_id',
            message: 'Select department:',
            choices: departments.map(dept => ({ name: dept.name, value: dept.id }))
        }
    ]);
};

module.exports = { mainMenu, departmentPrompt, rolePrompt };
