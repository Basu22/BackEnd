import Router from 'express' 
const router = Router()
import {mostrarCarrito, crearCarrito, agregarItemCarrito, elimiarCarrito, eliminarItemCarrito} from '../controllers/controllerCarrito.js'


router.get("/", mostrarCarrito)

router.post("/", crearCarrito)
router.post("/:id/productos", agregarItemCarrito)

router.delete("/:id", elimiarCarrito)
router.delete("/:id/productos/:id_prod", eliminarItemCarrito)


export default router