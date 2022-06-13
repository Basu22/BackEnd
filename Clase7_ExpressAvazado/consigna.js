const express = require('express')
const app = express()
const puerto = 8080
const productos = [
        {
            "title":"Comen2Pican3",
            "price":2500,
            "thumbnail":"https://www.res.com.ar/media/catalog/product/cache/dbcd7fcd96d4e43f69e3e3703d135006/p/i/picada-grande.jpg",
            "id":1
        },
        {
            "title":"Comen4Pican6",
            "price":3000,
            "thumbnail":"http://www.gruyenthal.com.ar/imagenes/pc/picada8b.jpg",
            "id":2
        },
        {
            "title":"Comen8Pican10",
            "price":3500,
            "thumbnail":"https://storage.googleapis.com/diariodemocracia/cache/cc/53/picada2-1-6e7c69.jpg",
            "id":3
        }
    ]

//esto sirve para acceder a la información del body y obtenerlas como si fuera un objeto
//se utiliza en los PUT
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/api/productos', (req,res)=>{
    const { titulo } = req.query
    if (titulo){
        const filtroTitulo = productos.filter(producto => producto.title.toLowerCase() === titulo.toLowerCase()) 
        res.status(200).json(filtroTitulo)
    } else{
        res.json(productos)
    }
})

app.get ('/api/productos/:id', (req,res)=>{
    //recupero el ID que viene de parametros 
    const { id } = req.params
    //Confirmo que no es un NaN el recibido por params
    if(isNaN(id)){
        res.status(400).json({ error:"El parámetro no es un número"})
    }
    //comprobamos que el ID ingresado este dentro de los rangos de la cantidad de productos existentes
    if (Number(id) > productos.length || Number(id)<=0){
        res.status(400).json({error:"No hay un producto con ese Identificador."})
    }else{
        //aplico un flitro con el ID recuperado
        const prod = productos.filter(producto => producto.id === Number(id))
        res.status(200).json(prod)
    }
})

app.post('/api/productos',(req,res)=>{
    const { title,price,thumbnail } = req.body
    
    return  console.log(title,price,thumbnail)
    res.sendStatus(201)
})


app.listen(puerto, err=>{
    if (err){
        console.log(`Hubo un error al iniciar el servidor ${err}` )
    }else{
        console.log(`Servidor escuchando el puerto: ${puerto}`)
    }
})