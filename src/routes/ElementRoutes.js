const express = require('express')
const ElementController = require('../controller/ElementController')
const router = express.Router()

router.get('/', ElementController.getallelements)
router.get('/relations', ElementController.getallelementrelations)
router.get('/relations/:element', ElementController.getrelationsforelement)
router.get('/relations/:element1/:element2', ElementController.getelementrelations)
router.get('/:element', ElementController.getelementbyid)

module.exports = router;