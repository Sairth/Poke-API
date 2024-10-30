//Importa e armazena a biblioteca do express em uma constante
const express = require('express')

//Cria uma instancia de roteador no express e armazena na constante
const router = express.Router()

//Importa o controlador e suas funções, armazenando-os em uma constante
const PokemonController = require('../controller/PokemonController')

//Rotas para gerenciamento dos pokemon

//Adquire todos os elementos
router.get('/', PokemonController.getallpokemon)

//Adquire um pokemon especifico por id
router.get('/:pokemon', PokemonController.getpokemonbyid)

//Adquire pokemon por raridade
router.get('/rarity/:rarity', PokemonController.getpokemonbyrarity)

//Aquire pokemon por região
router.get('/region/:region', PokemonController.getpokemonbyregion)

//Adiquire pokemon por geração
router.get('/generation/:generation', PokemonController.getpokemonbygeneration)

//Aquire pokemon por id
router.get('/element/:element', PokemonController.getpokemonbyelement)

//Aquire um pokemon por elemento e sua classficação 
router.get('/element/:element/:classfication', PokemonController.getpokemonelementbyclassfication)

//Exporta o objeto para que seja utilizado no index
module.exports = router;