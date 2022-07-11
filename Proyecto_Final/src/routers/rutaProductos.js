const { Router } = require('express')
const router = Router()
const {obtenerProducto, subirProducto, actualizarProducto, eliminarProducto} = require('../controllers/controllerProductos')

router.get("/", obtenerProducto)
router.get("/:id", obtenerProducto)

router.post("/", subirProducto)

router.put("/:id", actualizarProducto)

router.delete("/:id", eliminarProducto)

module.exports = router


