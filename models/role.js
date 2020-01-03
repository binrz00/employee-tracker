//bring in big and small sequelize to define role model
const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");
const department = require("./department");
const role = sequelize.define("role", {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    title: Sequelize.STRING,
    salary: Sequelize.INTEGER,
    //set up the foreign key
    department_id: { type: Sequelize.INTEGER, references: { model: department, key: "id" } }
}, {
    freezeTableName: true
});
//sync the role model with the employees database
role.sync();
module.exports = role;