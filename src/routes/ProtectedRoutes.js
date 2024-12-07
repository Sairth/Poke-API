const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const PokemonController = require('../controller/PokemonController')
const RegionController = require('../controller/RegionController')
const GameController = require('../controller/GameController')

const router = express.Router();

router.use(authMiddleware);

//Rota para criar um novo pokemon(Parâmetros necessários: name, description, rarity, stage, region, generation, weight, height)
router.post('/pokemon/create', PokemonController.createpokemon)

//Rota para criar uma nova região(Parâmetros necessários: name, description, teacher)
router.post('/region/create', RegionController.createRegion)

//Rota para adicionar um novo jogo(Parâmetros necessários: name, description, release)
router.post('/game/create', GameController.createGame)

module.exports = router;
