const PASSWORD_REGEX_PARTERN = "((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])|(?=.*[a-z])(?=.*[A-Z])(?=.*[!-/:-@\\[-`{-~])|(?=.*[a-z])(?=.*[0-9])(?=.*[!-/:-@\\[-`{-~])|(?=.*[A-Z])(?=.*[0-9])(?=.*[!-/:-@\\[-`{-~]))[a-zA-Z0-9!-/:-@\\[-`{-~]{0,1000}";

const Constants = {PASSWORD_REGEX_PARTERN};
module.exports = Constants;