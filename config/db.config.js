let sequelize = require("sequelize");
let instance = new sequelize(
    "ecomm_db",
    "root",
    "Jitandra$7102",
    {
        host : "localhost",
        dialect: "mysql",
        operatorsAliases: 0,
        pool: {
            max: 5,
            min: 0,
            acquire:30000,
            idle: 10000
        }
    }
)

module.exports = instance;