//bring in everything I need; my models, console.table, inquirer, and sequelize 
const employee = require("./models/employee");
const department = require("./models/department");
const role = require("./models/role");
const inquirer = require("inquirer");
const cTable = require("console.table");
const sequelize = require("./config/connection.js")
toDoQuestions();
function toDoQuestions() {
  //sync to the database so I am working with the most updated version
  sequelize.sync()
  inquirer.prompt([{
    type: "list", message: "what would you like to do?", name: "toDo", choices: ["view all employees", "view all departments", "view all roles",
      "add an employee", "add a role", "add a department", "update an employee's role", "I'm done"]
  }]).then(function (data) {
    switch (data.toDo) {
      case "view all employees":
        viewEmployees();
        break;
      case "view all departments":
        viewDepartments();
        break;
      case "view all roles":
        viewRoles();
        break;
      case "add an employee":
        addEmployee();
        break;
      case "add a role":
        addRole();
        break;
      case "update an employee's role":
        promotion();
        break;
      case "add a department":
        addDepartment();
        break;
      case "I'm done":
        return console.log("good bye");
    }
  })
}
function viewEmployees() {
  employee.findAll({ raw: true }).then(function (data) {
    tabledData = cTable.getTable(data);
    console.log(tabledData);
    toDoQuestions();
  })

};
function viewDepartments() {
  department.findAll({ raw: true }).then(function (data) {
    tabledData = cTable.getTable(data);
    console.log(tabledData);
    toDoQuestions();
  })

};
function viewRoles() {
  role.findAll({ raw: true }).then(function (data) {
    tabledData = cTable.getTable(data);
    console.log(tabledData);
    toDoQuestions();
  })

};
function addEmployee() {
  inquirer.prompt([{ message: "what is the employee's first name?", name: "first_name" }, { message: "what is the employee's last name?", name: "last_name" },
  { message: "what is the employee's role id?", name: "role_id" }, { message: "what is the employee's manager's id?", name: "manager_id" }])
    .then(function (res) {
      console.log(res);
      employee.create(res);
      toDoQuestions();
    })

};
function addRole() {
  inquirer.prompt([{ message: "what is the title of the new role?", name: "title" }, { message: "how much does this role pay?", name: "salary" },
  { message: "what is the department id for this new role?", name: "department_id" }]).then(function (res) {
    role.create(res);
    toDoQuestions();
  })

};
function promotion() {
  employee.findAll({ attributes: ["first_name", "last_name", "id"], raw: true }).then(function (data) {
    //creating a list of employees to pick from
    let employeeList = [];
    for (let i = 0; i < data.length; i++) {
      let fullName = `${data[i].first_name} ${data[i].last_name} ${data[i].id}`;
      employeeList.push(fullName);
    }
    inquirer.prompt([{ type: "list", message: "who is the employee?", name: "emp", choices: employeeList }, { message: "what is their new role id?", name: "role" }]).then(function (res) {
      employee.update(
        {
          role_id: res.role,
        },
        {// using regex to only look at the id of the name
          where: { id: res.emp.replace(/\D+/g, '') }
        });
      console.log(`${res.emp} has been promoted`)
      toDoQuestions();
    })
  })
};

function addDepartment() {
  inquirer.prompt([{ message: "what is the name of the new department?", name: "name" }]).then(function (res) {
    department.create(res);
    toDoQuestions();
  })

};
