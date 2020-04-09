const express = require('express');
const HttpStatus = require('http-status-codes');
const AppMessage = require("../helper/app_message");
const router = express.Router();
const lodash = require('lodash');
const AuthenticateService = require("../services/authenticate_service");
const {authenticateValidate} = require("../validates/authenticate_validate");
const {validationResult} = require('express-validator');

router.post('/login', authenticateValidate('login'), async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(HttpStatus.BAD_REQUEST).json({
            message: errors.array().pop().msg,
            code: HttpStatus.BAD_REQUEST
        });
    }
    const jsonBody = req.body;
    const password = jsonBody.password;
    const email = jsonBody.email;

    const token = await AuthenticateService.login(email, password);

    if (lodash.isEmpty(token)) {
        res.status(HttpStatus.BAD_REQUEST);
        res.json({message: AppMessage.LOGIN_FAILURE});
    } else {
        res.status(HttpStatus.OK);
        res.json({message: AppMessage.LOGIN_SUCCESS, access_token: token});
    }
});
module.exports = router;
