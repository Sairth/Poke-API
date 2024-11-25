const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const PokemonController = require('../controller/PokemonController')

const router = express.Router();

router.use(authMiddleware);

router.post('/pokemon/create', PokemonController.createpokemon);

module.exports = router;
