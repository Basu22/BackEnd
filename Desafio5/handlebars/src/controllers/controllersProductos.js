const { Contenedor } = require('../../productos.js')

const getProductos = async (req,res)=>{
    try{
        const data = new Contenedor('productos.txt')
        const productos = await data.getAll()
        res.render('main',{productos})
    }catch(e){
            console.log(e)
    }
}

const addProductos = (req, res)=>{
    try{
        const data = new Contenedor('productos.txt')
        data.save({
            name:req.body.name,
            price:Number(req.body.price),
            thumbnail: `${req.file.destination}/${req.file.filename}`
        })
        res.redirect('/productos')
    }catch(e){
        console.log(e)
    }
}



module.exports = { getProductos, addProductos }