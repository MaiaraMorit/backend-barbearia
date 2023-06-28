var express = require('express');
const userController = require('../controller/userController');
var router = express.Router();

/* GET users listing. */
router.post('/register', userController.userRegister);

module.exports = router;
