const Router = require('express')
const router = Router()
const rutaProductos = require("./rutaProductos")
const rutaCarrito = require("./rutaCarrito")
const {controlRuta} = require('../controllers/controllerError')

router.use("/api/productos", rutaProductos)
router.use("/api/carrito", rutaCarrito)
router.use("*", controlRuta)
module.exports = router