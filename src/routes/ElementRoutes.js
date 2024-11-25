//Importa e armazena a biblioteca do express em uma constante
const express = require('express')

//Cria uma instancia de roteador no express e armazena na constante
const router = express.Router()

//Importa o controlador e suas funções, armazenando-os em uma constante
const ElementController = require('../controller/ElementController')

//Rotas para o gerenciamento dos elementos

//Adquire todos os elementos
router.get('/', ElementController.getallelements)

//Adquire um elemento especifico com base no id
router.get('/:element', ElementController.getelementbyid)

//Adquire todas as relações entre elementos no banco de dados
router.get('/relations/all', ElementController.getallelementsrelation)

//Adquire como um elemento especifico se relaciona com outros
router.get('/relations/:element', ElementController.getrelationsforelement)

//Adquire como um especifico se relaciona com outro elemento especifico
router.get('/relations/:element1/:element2', ElementController.getelementsrelation)


module.exports = router;