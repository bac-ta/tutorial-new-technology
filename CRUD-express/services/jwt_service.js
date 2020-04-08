const jwt = require('jsonwebtoken');
const ApplicationConfig = require("../helper/app_config");

const AUTH_ATTRIBUTE = ApplicationConfig.fetchAppConfig.auth;
const jwtGenerate = (id, name, role) => {
    const timeSecondsNow = Math.floor(Date.now() / 1000);
    const tokenExpirationMsec = parseInt(AUTH_ATTRIBUTE['token-expiration-msec']);
    const token = jwt.sign({
        id: id,
        name: name,
        role: role,
        iat: timeSecondsNow,
        exp: timeSecondsNow + tokenExpirationMsec
    }, AUTH_ATTRIBUTE['token-secret'], {algorithm: 'HS512'});

    return token;
};
module.exports = jwtGenerate(id, name, role);