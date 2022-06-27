const { Router } = require('express')
const router = Router()
const { getProductos } =  require('../controllers/controllersProductos')

router.get('/', getProductos)

module.exports = router