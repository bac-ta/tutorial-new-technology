const AppMessage = require("../helper/app_message");
const Constants = require("../helper/constants");
const Enum = require("../helper/enumeration");
const {body} = require('express-validator');
const lodash = require('lodash');

exports.userValidate = (method) => {
    switch (method) {
        case 'createUser': {
            const checkConditions = [
                body('name').exists(),
                body('address').exists(),
                body('password').exists().isLength({
                    min: 8,
                    max: 20
                }).withMessage(AppMessage.PASSWORD_LENGHT).matches(Constants.PASSWORD_REGEX_PARTERN).withMessage(AppMessage.PASSWORD_CHARACTER_CONSTRAINT),
                body('email', AppMessage.EMAIL_INVALID).exists().isEmail(),
                body('role').exists().isInt().custom(value => {
                    const enumKey = Util.getEnumKeyByValue(Enum.RoleType, value);

                    if (lodash.isEmpty(enumKey))
                        return new Error(AppMessage.ROLE_INVALID);

                })
            ];
            return checkConditions;
        }
        case 'updateUser': {
            const checkConditions = [
                body('name').exists(),
                body('address').exists(),
                body('password').exists().isLength({
                    min: 8,
                    max: 20
                }).withMessage(AppMessage.PASSWORD_LENGHT).matches(Constants.PASSWORD_REGEX_PARTERN).withMessage(AppMessage.PASSWORD_CHARACTER_CONSTRAINT)
            ];
            return checkConditions;
        }
    }
};