const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const PokemonController = require('../controller/PokemonController')
const RegionController = require('../controller/RegionController')
const GameController = require('../controller/GameController')

const router = express.Router();

router.use(authMiddleware);

router.post('/pokemon/create', PokemonController.createpokemon)
router.post('/region/create', RegionController.createRegion)
router.post('/game/create', GameController.createGame)

module.exports = router;
