// Login and logout
const pool = require('../helper/connection');
const AppMessage = require("../helper/app_message");
const Util = require('../helper/util');
const lodash = require('lodash');
const http = require('http');

const login = (email, password) => {

    if (lodash.isEmpty(password))
        return false;

    pool.getConnection((err, connection) => {
        if (err) {
            Util.logger.error(err);
            throw new Error(AppMessage.DATABASE_ERROR);
        }
        Util.logger.info('connected as id ' + connection.threadId);

        connection.query("SELECT id, name, password FROM user WHERE email=" + "'" + email + "'", (err, rows) => {
            try {
                if (err) {
                    Util.logger.error(err);
                    throw new Error(AppMessage.SYNTAX_ERROR);
                }

                if (lodash.isEmpty(rows))
                    return false;

                const passwordStore = rows[0].password;

                if (!Util.comparePasswordSync(password, passwordStore))
                    return false;

            } finally {
                connection.release();
            }

        });
    });
    return true;

};