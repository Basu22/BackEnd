import Router from 'express' /* const Router = require('express')*/
const router = Router()
import rutaProductos from './rutaProductos.js' /* const rutaProductos = require("./rutaProductos")*/
import rutaCarrito from './rutaCarrito.js'
/* const rutaCarrito = require("./rutaCarrito")*/
/* const {controlRuta} = require('../controllers/controllerError') */

router.use("/api/productos", rutaProductos)
router.use("/api/carrito", rutaCarrito)
/* router.use("*", controlRuta)*/
export default router
/* module.exports = router */