import Router from 'express' /* const { Router } = require('express') */
const router = Router()
/* import defaultExport from '../controllers/controllerProductos.js' */
import controlUsuario from '../controllers/controllersUsuarios.js'
import {obtenerProducto, subirProducto, actualizarProducto, eliminarProducto} from '../controllers/controllerProductos.js'

console.log(controlUsuario)
router.get("/", obtenerProducto)
router.get("/:id", obtenerProducto)
router.post("/", subirProducto) 
router.put("/:id",actualizarProducto)
router.delete("/:id", eliminarProducto) 

export default router


