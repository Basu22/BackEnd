const { Router } = require('express')
const router = Router()
const {obtenerProducto, subirProducto, actualizarProducto, eliminarProducto} = require('../controllers/controllerProductos')
const {controlUsuario} = require('../controllers/controllersUsuarios')

router.get("/",  obtenerProducto)
router.get("/:id", obtenerProducto)

router.post("/",controlUsuario, subirProducto)

router.put("/:id",controlUsuario, actualizarProducto)

router.delete("/:id",controlUsuario, eliminarProducto)

module.exports = router


