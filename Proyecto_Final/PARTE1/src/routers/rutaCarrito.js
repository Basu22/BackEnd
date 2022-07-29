const { Router } = require('express')
const { mostrarCarrito, crearCarrito, agregarItemCarrito, elimiarCarrito, eliminarItemCarrito } = require('../controllers/controllerCarrito')
const router = Router()

router.get("/", mostrarCarrito)

router.post("/", crearCarrito)
router.post("/:id/productos", agregarItemCarrito)

router.delete("/:id", elimiarCarrito)
router.delete("/:id/productos/:id_prod", eliminarItemCarrito)


module.exports = router