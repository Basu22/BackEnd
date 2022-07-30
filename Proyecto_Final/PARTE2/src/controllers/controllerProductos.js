import {ProductoDAO} from '../dao/switchDAO.js'

const obtenerProducto = async (req, res)=>{
    const { id } = req.params
    if (!id){
        const productos = await ProductoDAO.getAll()
        res.json({productos})
    }else{
        const producto = await ProductoDAO.getByID(id)
        res.json({producto})
    }
}

const subirProducto = async (req,res)=>{
/*     if(!admin){ */
        const {nombre,descripcion, codigo, foto} = req.body
        const precio = Number(req.body.precio)
        const stock = Number(req.body.stock)
        await ProductoDAO.save(nombre,descripcion,codigo,foto,precio,stock,res)
/*     }else{
        res.json({ error : -1, descripcion: 'ruta /api/productos método POST no autorizada' })
    } */
}

const actualizarProducto = async (req,res)=>{
/*     if(!admin){ */
        const { id } = req.params
        const {nombre,descripcion, codigo, foto} = req.body
        const precio = Number(req.body.precio)
        const stock = Number(req.body.stock)
        await ProductoDAO.update(nombre,descripcion,codigo,foto,precio,stock,id,res)
/*     }else{
        res.json({ error : -1, descripcion: 'ruta /api/productos método PUT no autorizada' })
    } */
}

const eliminarProducto = async (req, res)=>{
/*     if(!admin){ */
        const { id } = req.params
        await ProductoDAO.erase(id,res)
/*     }else{
        res.json({ error : -1, descripcion: 'ruta /api/productos método DELETE no autorizada' })   
    } */
}

export {obtenerProducto, subirProducto, actualizarProducto, eliminarProducto}

/* El router base '/api/productos' implementará cuatro funcionalidades:
GET: '/:id?' - Me permite listar todos los productos disponibles ó un producto por su id (disponible para usuarios y administradores)
POST: '/' - Para incorporar productos al listado (disponible para administradores)
PUT: '/:id' - Actualiza un producto por su id (disponible para administradores)
DELETE: '/:id' - Borra un producto por su id (disponible para administradores)
*/
