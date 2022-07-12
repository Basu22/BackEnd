const { Productos } = require('../context/productos')
const ruta_data = process.env.PRODUCTOS
const data = new Productos(ruta_data)

const obtenerProducto = async (req, res)=>{
    const { id } = req.params
    if (!id){
        const productos = await data.getAll()
        res.json({productos})
    }else{
        const producto = await data.getByID(id)
        res.json({producto})
    }
}

const subirProducto = async (req,res)=>{
    if(!admin){
        const {nombre,descripcion, codigo, foto} = req.body
        const precio = Number(req.body.precio)
        const stock = Number(req.body.stock)
        await data.save(nombre,descripcion,codigo,foto,precio,stock,res)
    }else{
        res.json({ error : -1, descripcion: 'ruta /api/productos método POST no autorizada' })
    }

}

const actualizarProducto = async (req,res)=>{
    if(!admin){
        const { id } = req.params
        const {nombre,descripcion, codigo, foto} = req.body
        const precio = Number(req.body.precio)
        const stock = Number(req.body.stock)
        await data.update(nombre,descripcion,codigo,foto,precio,stock,id,res)
    }else{
        res.json({ error : -1, descripcion: 'ruta /api/productos método PUT no autorizada' })
    }
}

const eliminarProducto = async (req, res)=>{
    if(!admin){
        const { id } = req.params
        await data.erase(id,res)
    }else{
        res.json({ error : -1, descripcion: 'ruta /api/productos método DELETE no autorizada' })   
    }
}

module.exports = { obtenerProducto, subirProducto, actualizarProducto, eliminarProducto }


/* El router base '/api/productos' implementará cuatro funcionalidades:
GET: '/:id?' - Me permite listar todos los productos disponibles ó un producto por su id (disponible para usuarios y administradores)
POST: '/' - Para incorporar productos al listado (disponible para administradores)
PUT: '/:id' - Actualiza un producto por su id (disponible para administradores)
DELETE: '/:id' - Borra un producto por su id (disponible para administradores)
*/
