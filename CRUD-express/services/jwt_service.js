const jwt = require('jsonwebtoken');
const ApplicationConfig = require("../helper/app_config");
const HttpStatus = require('http-status-codes');
const AppMessage = require("../helper/app_message");

const AUTH_ATTRIBUTE = ApplicationConfig.fetchAppConfig.app.auth;

const generateJwt = (id, name, role) => {
    const timeSecondsNow = Math.floor(Date.now() / 1000);
    const tokenExpirationMsec = parseInt(AUTH_ATTRIBUTE.token_expiration_msec);
    const token = jwt.sign({
        id: id,
        name: name,
        role: role,
        iat: timeSecondsNow,
        exp: timeSecondsNow + tokenExpirationMsec
    }, AUTH_ATTRIBUTE.token_secret, {algorithm: 'HS512'});

    return token;
};


const verifyJwt = async (req, res, next) => {
    try {
        const token = await req.header('Authorization').replace('Bearer ', '');
        const info = jwt.verify(token, AUTH_ATTRIBUTE.token_secret);
        req.tokenInfo = info;
        next();
    } catch (e) {
        res.status(HttpStatus.UNAUTHORIZED).send({message: AppMessage.UNAUTHORIZED})
    }
};

const JWTService = {generateJwt, verifyJwt};
module.exports = JWTService;