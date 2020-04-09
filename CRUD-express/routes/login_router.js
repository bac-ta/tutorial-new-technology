const express = require('express');
const HttpStatus = require('http-status-codes');
const AppMessage = require("../helper/app_message");
const router = express.Router();
const lodash = require('lodash');
const AuthenticateService = require("../services/authenticate_service");
const {authenticateValidate} = require("../validates/authenticate_validate");

router.post('/', authenticateValidate('login'),  async (req, res) => {
    const jsonBody = req.body;
    const password = jsonBody.password;
    const email = jsonBody.email;

    const token =  await AuthenticateService.login(email, password);
    console.log("token ");
    console.log(token);

    if (lodash.isEmpty(token)) {
        res.status(HttpStatus.BAD_REQUEST);
        res.json({message: AppMessage.LOGIN_FAILURE});
    } else {
        res.status(HttpStatus.OK);
        res.json({message: AppMessage.LOGIN_SUCCESS, access_token: token});
    }
});
module.exports = router;
