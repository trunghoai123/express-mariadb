var express = require('express');
var router = express.Router();
var UserController = require('../controllers/UserController');

router.get('/users', UserController.getAllUsers);

module.exports = router;
