const { mainMenu, departmentPrompt, rolePrompt } = require('./prompts');
const { getDepartments, getRoles, getEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole } = require('../db/queries');

const runApp = async () => {
    let running = true;

    while (running) {
        const { action } = await mainMenu();

        switch (action) {
            case 'View All Departments':
                console.table(await getDepartments());
                break;
            case 'View All Roles':
                console.table(await getRoles());
                break;
            case 'View All Employees':
                console.table(await getEmployees());
                break;
            case 'Add a Department':
                const { name } = await departmentPrompt();
                await addDepartment(name);
                console.log(`Added department: ${name}`);
                break;
            case 'Add a Role':
                const departments = await getDepartments();
                const roleData = await rolePrompt(departments);
                await addRole(roleData.title, roleData.salary, roleData.department_id);
                console.log(`Added role: ${roleData.title}`);
                break;
            case 'Exit':
                running = false;
                console.log('Goodbye!');
                break;
            default:
                console.log('Invalid selection, please try again.');
        }
    }
};

runApp();
