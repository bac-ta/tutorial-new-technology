var express = require('express');
var router = express.Router();
var app = express();

//Middleware
var requestTime = (req, res, next) => {
    req.requestTime = Date.now();
    next();
};

router.use(requestTime);

/* GET users listing. */
router.get('/', (req, res, next) => {
    res.send('respond with a resource');
});

module.exports = router;
