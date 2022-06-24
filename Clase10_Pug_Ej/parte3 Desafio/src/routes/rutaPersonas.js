const { Router } = require('express')
const router = Router()
const { crearPersonas, obtenerPersonas } = require('../controllers/controllersPersonas')

router.get('/', obtenerPersonas)

router.post('/', crearPersonas)

module.exports = router