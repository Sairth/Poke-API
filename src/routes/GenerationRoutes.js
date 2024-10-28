const express = require('express')
const GenerationController = require('../controller/GenerationController')
const router = express.Router()

router.get('/', GenerationController.getallgenerations)
router.get('/:id', GenerationController.getgenerationbyid)

module.exports = router;