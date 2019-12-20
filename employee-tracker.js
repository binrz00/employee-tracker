const employee = require("./model/models");
import("sequelize");
import("./model");
const inquirer = require("inquirer");
const cTable = require('console.table');
function toDoQuestions(){
inquirer.prompt([{type:"list",message:"what would you like to do?",name: "toDo",choices:["view all employees","view all departments","view all roles",
"add an employee","add a role","add a department","update an employee's role"]}]).then(function(data){
switch(data.toDo){
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
case "update employee role":
  promotion();
break;
case "add a department":
  addDepartment();
break;
}
})
}
function viewEmployees(){
employee.findAll().then(function(data){
  console.log(data);
})
 toDoQuestions();
};
function viewDepartments(){
  toDoQuestions();
};
function viewRoles(){
  toDoQuestions();
};
function addEmployee(){
  inquirer.prompt([{message:"what is the employee's first name?",name:"Fname"},{message:"what is the employee's last name?",name:"Lname"},
{message:"what is the employee's title?",name:"title"},{message:"who is the employee's manager?",name:"manager"},{message:"how much does this employee make?",name:"salary"}])
.then(function(res){
  console.log(res.Fname,res.Lname,res.manager,res.title.res.salary);
})
  toDoQuestions();
};
function addRole(){
  inquirer.prompt([{message:"what is the title of the new role?",name:"title"},{message:"what department does this role work in?",name:"dep"}]).then(function(){
  
  })
  toDoQuestions();
};
function promotion(){
  inquirer.prompt([{type:"list",message:"who is the employee?",name:"emp",choices:[]},{message:"what is their new title?",name:"title"}]).then(function(){
  
  })
  toDoQuestions();
};
function addDepartment(){
  inquirer.prompt([{message:"what is the name of the new department?",name:"name"}]).then(function(){
  
  })
  toDoQuestions();
};

