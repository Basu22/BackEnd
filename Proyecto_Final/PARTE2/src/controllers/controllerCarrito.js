const { Carrito } = require('../context/productos')
const ruta_data = process.env.PRODUCTOS
const ruta_carrito = process.env.CARRITO
const data = new Carrito(ruta_data,ruta_carrito)

/* El router base '/api/carrito' implementará tres rutas disponibles para usuarios y administradores:
*/

/* 
GET: '/:id/productos' - Me permite listar todos los productos guardados en el carrito 
*/
const mostrarCarrito = async (req, res)=>{
    const { id } = req.params
    if (!id){
        await data.getAllCarrito(res)
    }else{
        await data.getByID(id)
    }
}

/* 
POST: '/' - Crea un carrito y devuelve su id. 
*/
const crearCarrito = async (req, res)=>{
    await data.buildCarrito(res)
}

/* 
POST: '/:id/productos' - Para incorporar productos al carrito por su id de producto
*/
const agregarItemCarrito = async(req, res)=>{
    const { id } = req.params
    const { idProducto } = req.body
    await data.addItemCarrito(id,idProducto,res)
}

/* 
DELETE: '/:id' - Vacía un carrito y lo elimina.
*/
const elimiarCarrito = async (req, res)=>{
    const { id } = req.params
    await data.eraseCarrito(id,res)
}

/* 
DELETE: '/:id/productos/:id_prod' - Eliminar un producto del carrito por su id de carrito y de producto
 */
const eliminarItemCarrito = async (req, res)=>{
    const { id, id_prod } = req.params
    await data.eraseItemCarrito(id,id_prod,res)
}


module.exports = { mostrarCarrito, crearCarrito, agregarItemCarrito, elimiarCarrito, eliminarItemCarrito }