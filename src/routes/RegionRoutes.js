const express = require('express')
const RegionController = require('../controller/RegionController')
const router = express.Router()

router.get('/', RegionController.getallregions)
router.get('/:id', RegionController.getregionbyid)

module.exports = router;