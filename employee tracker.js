const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');
const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "employees_db"
});

connection.connect(function(err) {
  if (err) throw err;
});
function toDoQuestions(){
inquirer.prompt([{type:"list",message:"what would you like to do?",name: "toDo",choices:["view all employees","view all employees by department","view all employees by manager",
"add employee","remove employee","update employee role","update employee manager","view all roles"]}]).then(function(data){
switch(data.toDo){
case "view all employees":
  viewEmployees();
break;
case "view all employees by department":
  viewDepartment();
break;
case "view all employees by manager":
  viewManager();
break;
case "add employee":
  addEmployee();
break;
case "remove employee":
  removeEmployee();
break;
case "update employee role":
  promotion();
break;
case "update employee manager":
  changeManager();
break;
case "view all roles":
  viewRoles();
}
})
}
function viewEmployees(){
  toDoQuestions();
};
function viewDepartment(){
  toDoQuestions();
};
function viewManager(){
  toDoQuestions();
};
function addEmployee(){
  toDoQuestions();
};
function removeEmployee(){
  toDoQuestions();
};
function promotion(){
  toDoQuestions();
};
function changeManager(){
  toDoQuestions();
};
function viewRoles(){
  toDoQuestions();
}