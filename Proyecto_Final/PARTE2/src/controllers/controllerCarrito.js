import { CarritoDAO } from '../dao/switchDAO.js'
/* El router base '/api/carrito' implementará tres rutas disponibles para usuarios y administradores:*/

/*GET: '/:id/productos' - Me permite listar todos los productos guardados en el carrito */
const mostrarCarrito = async (req, res)=>{
    const { id } = req.params
    if (!id){
        await CarritoDAO.getAllCarrito(res)
    }else{
        await data.getByID(id)
    }
}

/* POST: '/' - Crea un carrito y devuelve su id. */
const crearCarrito = async (req, res)=>{
    await CarritoDAO.buildCarrito(res)
}

/* 
POST: '/:id/productos' - Para incorporar productos al carrito por su id de producto
*/
const agregarItemCarrito = async(req, res)=>{
    const { id } = req.params
    const { idProducto } = req.body
    await CarritoDAO.addItemCarrito(id,idProducto,res)
}

/* 
DELETE: '/:id' - Vacía un carrito y lo elimina.
*/
const elimiarCarrito = async (req, res)=>{
    const { id } = req.params
    await CarritoDAO.eraseCarrito(id,res)
}

/* 
DELETE: '/:id/productos/:id_prod' - Eliminar un producto del carrito por su id de carrito y de producto
 */
const eliminarItemCarrito = async (req, res)=>{
    const { id, id_prod } = req.params
    await CarritoDAO.eraseItemCarrito(id,id_prod,res)
}


export {mostrarCarrito, crearCarrito, agregarItemCarrito, elimiarCarrito, eliminarItemCarrito}