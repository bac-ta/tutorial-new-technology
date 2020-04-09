// Login and logout
const pool = require('../helper/connection');
const AppMessage = require("../helper/app_message");
const Util = require('../helper/util');
const lodash = require('lodash');
const JWTService = require("./jwt_service");
const util = require('util');

const login = async (email, password) => {

    if (lodash.isEmpty(password))
        return '';

    const connectionAsync = util.promisify(pool.getConnection);

    pool.getConnection((err, connection) => {
        if (err) {
            Util.logger.error(err);
            throw new Error(AppMessage.DATABASE_ERROR);
        }
        Util.logger.info('connected as id ' + connection.threadId);

        connection.query("SELECT id, name, password, role FROM user WHERE email=" + "'" + email + "'", (err, rows) => {
            try {
                if (err) {
                    Util.logger.error(err);
                    throw new Error(AppMessage.SYNTAX_ERROR);
                }

                if (lodash.isEmpty(rows))
                    return '';

                const passwordStore = rows[0].password;

                if (!Util.comparePasswordSync(password, passwordStore))
                    return '';

                const id = rows[0].id;
                const name = rows[0].name;
                const role = rows[0].role;
                //make jwt token
                return JWTService.jwtGenerate(id, name, role);

            } finally {
                connection.release();
            }

        });
    });

};
const AuthenticateService = {login};
module.exports = AuthenticateService;