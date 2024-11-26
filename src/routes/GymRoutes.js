//Importa e armazena a biblioteca do express em uma constante
const express = require('express')

//Cria uma instancia de roteador no express e armazena na constante
const router = express.Router()

//Importa o controlador e suas funções, armazenando-os em uma constante
const GymController = require('../controller/GymController')

//Rotas para o gerenciamento dos ginásios

//Adquire todos os ginásios
router.get('/', GymController.getallgym)

//Adquire um ginásio especifico por id
router.get('/:id', GymController.getgymbyid)

//Adquire ginasios com base no seu elemento
router.get('/element/:element', GymController.getgymbyelement)

//Adquire ginásios com base na região
router.get('/region/:region', GymController.getgymbyregion)

//Exporta o objeto para que seja utilizado no index
module.exports = router;