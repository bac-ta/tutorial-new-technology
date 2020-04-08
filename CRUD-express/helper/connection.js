const mysql = require('mysql');
const ApplicationConfig = require("./app_config");

const MYSQL_ATTRIBUTES = ApplicationConfig.fetchAppConfig.app.mysql;
const pool = mysql.createPool({
    connectionLimit: parseInt(MYSQL_ATTRIBUTES.connectionLimit),
    host: MYSQL_ATTRIBUTES.host,
    user: MYSQL_ATTRIBUTES.user,
    password: MYSQL_ATTRIBUTES.password,
    database: MYSQL_ATTRIBUTES.database
});

module.exports = pool;
