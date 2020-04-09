const AppMessage = require("../helper/app_message");
const Constants = require("../helper/constants");
const {body} = require('express-validator');

exports.authenticateValidate = (method) => {
    switch (method) {
        case 'login': {
            const checkConditions= [
                body('password').exists().isLength({
                    min: 8,
                    max: 20
                }).withMessage(AppMessage.PASSWORD_LENGHT).matches(Constants.PASSWORD_REGEX_PARTERN).withMessage(AppMessage.PASSWORD_CHARACTER_CONSTRAINT),
                body('email', AppMessage.EMAIL_INVALID).exists().isEmail(),
            ];
            return checkConditions;
        }
        case 'createUser': {

        }
    }
};