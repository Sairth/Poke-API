const express = require('express')
const GymController = require('../controller/GymController')
const router = express.Router()

router.get('/', GymController.getallgym)
router.get('/:id', GymController.getgymbyid)
router.get('/element/:element', GymController.getgymbyelement)
router.get('/region/:region', GymController.getgymbyregion)

module.exports = router;