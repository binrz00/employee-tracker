import("sequelize");
const inquirer = require("inquirer");
const cTable = require('console.table');
const chooseEmployee = [{message: "which employee would you like to select",name: "employee"}];
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


 // toDoQuestions();
};
function viewDepartments(){
  toDoQuestions();
};
function viewRoles(){
  toDoQuestions();
};
function addEmployee(){
  
  toDoQuestions();
};
function addRole(){
  inquirer.prompt(chooseEmployee).then(function(){
  
  })
  toDoQuestions();
};
function promotion(){
  toDoQuestions();
};
function addDepartment(){
  inquirer.prompt(chooseEmployee).then(function(){
  
  })
  toDoQuestions();
};

// bar_id: {
//   type: Sequelize.INTEGER,

//   references: {
//     // This is a reference to another model
//     model: Bar,

//     // This is the column name of the referenced model
//     key: 'id',

//     // This declares when to check the foreign key constraint. PostgreSQL only.
//     deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
//   }
// },