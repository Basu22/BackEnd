const { Router } = require('express')
const router = Router()
const { routerController } = require('../controllers/rutasControllers')

router.get('/', routerController)

module.exports = router