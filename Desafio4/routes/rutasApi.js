const { Router } = require('express')
const multer = require('multer')
const router = Router()
let productos =[]

//creo un Multer en donde voy tomando los archivos que se van subiendo
let storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, 'uploads')
    },
    filename:(req,file,cb)=>{
        cb(null, Date.now()+ '-' +file.originalname )
    }
})
let upload = multer({ storage })

//1 - GET DE /API/PRODUCTOS PARA VER TODOS LOS PRODUCTOS
router.get('/',(req,res)=>{
    res.json(productos.filter(producto=>producto.id!==-1))
})

//2 - GET DE /API/PRODUCTOS/:ID PARA RECUPERAR PROUCTO SELECCIONADO
router.get('/:id',(req,res)=>{
    const { id } = req.params
    if(id>0){
        let producto = productos.filter(producto=>producto.id === Number(id))
        if (!producto.length){
            res.json({ error: 'producto no encontrado' })
        }else{
            res.json(producto)
        }
    }else{
        res.json({ error: 'ingrese un ID mayor a 0' })
    }
})

//3 - POST DE /API/PRODUCTOS CON MULTER
router.post('/',upload.single('thumbnail'),(req,res)=>{
    const {name,price} = req.body
    let id = productos.length
    
    if (!id){
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
    }
    res.sendStatus(201)
})

//4 - PUT /API/PRODUCTOS/:ID PARA ACTUALIZAR UN PRODUCTO SEGUN ID
router.put('/:id',(req,res)=>{
    const { id } = req.params
    const { name, price, thumbnail } = req.body
    if(id>0){
        let producto = productos.filter(producto=>producto.id === Number(id))
        if (!producto.length){
            res.json({ error: 'producto no encontrado' })
        }else{
            if(!name||!price||!thumbnail){
                res.json({ error: 'ingrese datos para actualizar' })
            }else{
                productos[id-1].name = name
                productos[id-1].price = price
                productos[id-1].thumbnail = thumbnail
                res.json(producto)
            }
        }
    }else{
        res.json({ error: 'ingrese un ID mayor a 0' })
    }
})

//5 - DELETE PARA BORRAR EL ID QUE INDIQUEMOS
router.delete('/:id',(req,res)=>{
    const { id } = req.params
    const { name, price, thumbnail } = req.body
    if(id>0){
        let producto = productos.filter(producto=>producto.id === Number(id))
        if (!producto.length){
            res.json({ error: 'producto no encontrado' })
        }else{
            if(!name||!price||!thumbnail){
                res.json({ error: 'ingrese datos para actualizar' })
            }else{
                productos[id-1].id=-1
                productos[id-1].name=""
                productos[id-1].price=""
                productos[id-1].thumbnail=""
                res.json(productos)
            }
        }
    }else{
        res.json({ error: 'ingrese un ID mayor a 0' })
    }
})

module.exports= router