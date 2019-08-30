const express = require('express')
const router = express.Router()
const controller = require('../controllers/index')
const validateToken = require('../controllers/validate')
console.log(controller)


router.get('/', validateToken.getToken , controller.getIndex)
router.post('/',controller.getUser)

module.exports = router