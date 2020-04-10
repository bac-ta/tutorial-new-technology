const bcrypt = require('bcrypt');
const hashPasswordSync = (password) => {
    const hashPassword = bcrypt.hashSync(password, 10);
    return hashPassword;
};

const comparePasswordSync = (comparePassword, passwordHash) => {
    return bcrypt.compareSync(comparePassword, passwordHash);
};


const {createLogger, transports, format} = require('winston');

const logger = createLogger({
    format: format.combine(
        format.timestamp({format: 'YYYY-MM-DD HH:mm:ss:ms'}),
        format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
    ),
    transports: [
        new transports.File({
            filename: '/tmp/logs/all-logs.log',
            json: false,
            maxsize: 5242880,
            maxFiles: 5,
        }),
        new transports.Console(),
    ]
});

const getEnumKeyByValue = (object, value) => {
    return Object.keys(object).find(key => object[key] === value);
};

const Util = {
    hashPasswordSync, comparePasswordSync, logger, getEnumKeyByValue
};
module.exports = Util;