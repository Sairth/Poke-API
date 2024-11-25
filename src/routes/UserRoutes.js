const express = require('express');
const userController = require('../controller/UserController');

const router = express.Router();

router.post('/login', userController.login);
router.post('/create', userController.createUser);

module.exports = router;
