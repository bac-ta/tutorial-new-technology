const DATABASE_ERROR = 'Cannot connect to database';
const SYNTAX_ERROR = 'Your syntax error';
const LOGIN_FAILURE = 'Login failure, please check your email/password';
const LOGIN_SUCCESS = 'Login success';
const PASSWORD_LENGHT = 'Password must be at least 8 character and at most 20 character';
const PASSWORD_CHARACTER_CONSTRAINT = 'Password must be constrain at leat 1 string character , 1 number character, 1 special characters character';
const EMAIL_INVALID = 'Email invalid';
const DATABASE_CONNECTION_LOST = 'Database connection was closed';
const ER_CON_COUNT_ERROR = 'Database has too many connections';
const ECONNREFUSED = 'Database connection was refused';
const ID_INVALID = 'Id must be interger and > 0';
const UNAUTHORIZED = 'Not authorized to access this resource';
const PERMISSION_DENIED = 'Permission denied';
const ROLE_INVALID = 'Role invalid';
const CREATE_USER_SUCCCESS = 'Create user success';
const CREATE_USER_FAILURE = 'Create user failure';

const AppMessage = {
    DATABASE_ERROR,
    SYNTAX_ERROR,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    PASSWORD_LENGHT,
    PASSWORD_CHARACTER_CONSTRAINT,
    EMAIL_INVALID,
    DATABASE_CONNECTION_LOST,
    ER_CON_COUNT_ERROR,
    ECONNREFUSED,
    ID_INVALID,
    UNAUTHORIZED,
    PERMISSION_DENIED,
    ROLE_INVALID,
    CREATE_USER_SUCCCESS,
    CREATE_USER_FAILURE
};
module.exports = AppMessage;