const mysql = require('mysql');
const util = require('util');
const ApplicationConfig = require("./app_config");
const AppMessage = require("./app_message");
const Util = require('./util');

const MYSQL_ATTRIBUTES = ApplicationConfig.fetchAppConfig.app.mysql;
const pool = mysql.createPool({
    connectionLimit: parseInt(MYSQL_ATTRIBUTES.connectionLimit),
    host: MYSQL_ATTRIBUTES.host,
    user: MYSQL_ATTRIBUTES.user,
    password: MYSQL_ATTRIBUTES.password,
    database: MYSQL_ATTRIBUTES.database
});

// Ping database to check for common exception errors.
pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            Util.logger.error(AppMessage.DATABASE_CONNECTION_LOST);
        } else if (err.code === 'ER_CON_COUNT_ERROR')
            Util.logger.error(AppMessage.ER_CON_COUNT_ERROR);
        else if (err.code === 'ECONNREFUSED')
            Util.logger.error(AppMessage.ECONNREFUSED);
    }

    if (connection)
        connection.release();

});

pool.query = util.promisify(pool.query);

module.exports = pool;
