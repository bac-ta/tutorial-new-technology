// Login
const pool = require('../helper/connection');
const Util = require('../helper/util');
const lodash = require('lodash');
const JWTService = require("./jwt_service");

const login = async (email, password) => {

    if (lodash.isEmpty(password))
        return '';

    var queryUrl = "SELECT id, name, password, role FROM user WHERE email=" + "'" + email + "'";
    var rows = await pool.query(queryUrl);

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

};
const AuthenticateService = {login};
module.exports = AuthenticateService;