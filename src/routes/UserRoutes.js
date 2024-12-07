const express = require('express');
const userController = require('../controller/UserController');

const router = express.Router();

//rota para o fazer login(Parâmetros necesários: username e password)
router.post('/login', userController.login);
router.post('/create', userController.createUser);

module.exports = router;
