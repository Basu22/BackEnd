const Router = require('express')
const router = Router()
const rutaProductos = require("./rutaProductos")
const rutaCarrito = require("./rutaCarrito")

router.use("/api/productos", rutaProductos)
router.use("/api/carrito", rutaCarrito)

module.exports = router