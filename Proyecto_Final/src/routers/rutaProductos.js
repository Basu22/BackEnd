const { Router } = require('express')
const router = Router()
const {obtenerProductos, subirProducto} = require('../controllers/controllerProductos')

router.get("/", obtenerProductos)
router.get("/:id", obtenerProductos)

router.post("/", subirProducto)

router.put("/")

router.delete("/")

module.exports = router


