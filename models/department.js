//bring in big and small sequelize to define department model
const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");
const department = sequelize.define("department", {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: Sequelize.STRING
}, {
    freezeTableName: true
}
)
//sync the department model with the employees database
department.sync();

module.exports = department;
