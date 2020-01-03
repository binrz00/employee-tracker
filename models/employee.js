//bring in big and small sequelize to define employee model
const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");
const role = require("./role");
const employee = sequelize.define("employee", {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    //set up the foreign key
    role_id: { type: Sequelize.INTEGER, references: { model: role, key: "id" } },
    manager_id: Sequelize.INTEGER
}, {
    freezeTableName: true
});
//sync the employee model with the employees database
employee.sync();
module.exports = employee;