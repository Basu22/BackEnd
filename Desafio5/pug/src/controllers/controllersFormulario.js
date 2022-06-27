const { Contenedor } = require('../../productos.js')

const mostrarFormulario = (req, res)=>{
    res.render('formulario.pug')
}


const addProductos = (req, res)=>{
    try{
        const data = new Contenedor('productos.txt')
        data.save({
            title:req.body.name,
            price:Number(req.body.price),
            thumbnail: `${req.file.destination}/${req.file.filename}`
        })
    }catch(e){
        console.log(e)
    }
}

module.exports = { addProductos, mostrarFormulario }