var express = require('express');
const userController = require('../controller/userController');
const { errorMiddleware } = require('../middlewares/errorMiddleware');
var router = express.Router();

/* GET users listing. */
router.get('/login', userController.userLogin);

module.exports = router;
