const mysql = require('mysql');
const ApplicationConfig = require("../../helper/fetching_application_config");

const MYSQL_ATTRIBUTES = ApplicationConfig.fetchAppConfig.app.mysql;

const connection = mysql.createConnection({
    host: MYSQL_ATTRIBUTES.host,
    user: MYSQL_ATTRIBUTES.user,
    password: MYSQL_ATTRIBUTES.password,
    database: MYSQL_ATTRIBUTES.database
});

module.exports = connection;
