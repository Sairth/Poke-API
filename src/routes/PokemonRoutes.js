const express = require('express')
const router = express.Router()
const PokemonController = require('../controller/PokemonController')

router.get('/', PokemonController.getallpokemon)
router.get('/:id', PokemonController.getpokemonbyid)
router.get('/rarity/:rarity', PokemonController.getpokemonbyrarity)
router.get('/region/:region', PokemonController.getpokemonbyregion)
router.get('/generation/:generation', PokemonController.getpokemonbygeneration)
router.get('/element/:element', PokemonController.getpokemonbyelement)
router.get('/element/:element/:classfication', PokemonController.getpokemonelementbyclassfication)

module.exports = router;