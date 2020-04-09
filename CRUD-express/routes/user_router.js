const express = require('express');
const UserService = require("../services/user_service");
const router = express.Router();
const lodash = require('lodash');
const HttpStatus = require('http-status-codes');
const AppMessage = require("../helper/app_message");

const getUser = router.get('/user/:id', async (req, res) => {
    const id = req.params.id;
    if (!lodash.isInteger(id) || id < 0) {
        res.status(HttpStatus.BAD_REQUEST);
        res.json({message: AppMessage.ID_INVALID});
    } else {
        const user = await UserService.getUser(id);
        res.status(HttpStatus.OK);
        res.json(user);
    }
});

const UserRouter = {getUser};
module.exports = UserRouter;