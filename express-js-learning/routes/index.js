var express = require('express');
var router = express.Router();
var app = express();
//Middle ware
const log = (req, res, next) => {
    console.log('Home logged');
    next();
};
app.use(log);

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', {title: 'Express'});
});

module.exports = router;
