const express = require('express')
const router = express.Router()
const GameController = require('../controller/GameController')

router.get('/', GameController.getgames)
router.get('/:id', GameController.getgamebyid)
router.get('/release/:release', GameController.getgamebyreleasedate)
router.get('/region/:region', GameController.getgamebyregion)

module.exports = router;