const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");
const department = sequelize.define("department",{
    id: {type:Sequelize.INTEGER, primaryKey:true, autoIncrement: true},
    name: Sequelize.STRING},{
        freezeTableName:true})
department.sync();

const role = sequelize.define("role",{
id: {type:Sequelize.INTEGER, primaryKey:true, autoIncrement: true},
title: Sequelize.STRING,
salary: Sequelize.INTEGER,
department_id: {type: Sequelize.INTEGER,references:{model:department,key:"id"}}},{
 freezeTableName:true});
role.sync();

const employee = sequelize.define("employee",{
    id: {type:Sequelize.INTEGER, primaryKey:true, autoIncrement: true},
    first_name: Sequelize.STRING,
    last_name:Sequelize.STRING,
    role_id: {type: Sequelize.INTEGER,references:{model:role,key:"id"}},
    manager_id:Sequelize.INTEGER},{
    freezeTableName:true});
    employee.sync();

module.exports = employee;
module.exports = role;
module.exports = department;