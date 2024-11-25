// Importa e armazena a biblioteca do express em uma constante
const express = require('express')

// Cria uma instancia de roteador no express e armazena na constante
const router = express.Router()

// Importa o controlador e suas funções, armazenando-os em uma constante
const GameController = require('../controller/GameController')

// Rotas para o gerenciamento dos jogos da franquia

// Adquire todos os jogos
router.get('/', GameController.getgames)

// Adquire um jogo específico com base no id
router.get('/:id', GameController.getgamebyid)

// Adquire jogos com base na data de lançamento
router.get('/release/:release', GameController.getgamebyreleasedate)

// Adquire jogos com base na região que se passa
router.get('/region/:region', GameController.getgamebyregion)

// Exporta o objeto para que seja utilizado no app
module.exports = router;