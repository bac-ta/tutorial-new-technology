const express = require('express');
const UserService = require("../services/user_service");
const router = express.Router();
const lodash = require('lodash');
const HttpStatus = require('http-status-codes');
const AppMessage = require("../helper/app_message");
const JWTService = require("../services/jwt_service");
const Enum = require("../helper/enumeration");
const {userValidate} = require("../validates/user_validate");
const {validationResult} = require('express-validator');

const createUser = router.post('/user', userValidate('createUser'), async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(HttpStatus.BAD_REQUEST).json({
            message: errors.array().pop().msg
        });
    }
    const user = req.body;
    try {
        await UserService.createUser(user);
        res.status(HttpStatus.OK).json({message: AppMessage.CREATE_USER_SUCCCESS});
    } catch (e) {
        res.status(HttpStatus.BAD_REQUEST).json({message: AppMessage.CREATE_USER_FAILURE})
    }

});

const getUser = router.get('/user/:id', JWTService.verifyJwt, async (req, res) => {
    const id = parseInt(req.params.id);
    if (!lodash.isInteger(id) || id < 0) {
        res.status(HttpStatus.BAD_REQUEST);
        res.json({message: AppMessage.ID_INVALID});
    } else {
        const tokenInfo = req.tokenInfo;
        const role = tokenInfo.role;

        if (!(role in Enum.RoleType)) {
            res.status(HttpStatus.FORBIDDEN).json({message: AppMessage.PERMISSION_DENIED});
            return;
        }
        const user = await UserService.getUser(id);
        res.status(HttpStatus.OK).json(user);
    }
});

const UserRouter = {getUser, createUser};
module.exports = UserRouter;