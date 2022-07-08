const fs = require('fs')
const { Contenedor } = require('../../productos')
const ruta_db = process.env.PRODUCTOS
const data = new Contenedor('productos.txt')


const obtenerProductos = async (req, res)=>{
    const { id } = req.params
    const productos = await data.getAll()
    if (!id){
        res.json({productos})
    }else{
        const producto = productos.filter(producto=>producto.id === Number(id))
        res.json({producto})
    }
}

const subirProducto = async (req,res)=>{
    const { name,price } = req.body
    const id = (await data.getAll()).length
    let db = await fs.promises.readFile(ruta_db,"utf-8")
    console.log(db)
    
    
    res.sendStatus(201)
}




module.exports = { obtenerProductos, subirProducto }



/* El router base '/api/productos' implementará cuatro funcionalidades:
GET: '/:id?' - Me permite listar todos los productos disponibles ó un producto por su id (disponible para usuarios y administradores)
POST: '/' - Para incorporar productos al listado (disponible para administradores)
PUT: '/:id' - Actualiza un producto por su id (disponible para administradores)
DELETE: '/:id' - Borra un producto por su id (disponible para administradores)
 */




/* if (!id){
    productos = [...productos,{ 
        id:1,
        name, 
        price, 
            thumbnail:`/${req.file.destination}/${req.file.filename}` 
    }]
}else{
    productos = [...productos,{ 
            id:id+1,
            name, 
            price, 
                thumbnail:`/${req.file.destination}/${req.file.filename}` 
        }]
} */