const { Contenedor } = require('../../productos.js')

const getProductos = async (req,res)=>{
    try{
        const data = new Contenedor('productos.txt')
        const productos = await data.getAll()
        res.render('productos.pug',{productos})
    }catch(e){
            console.log(e)
    }
}


module.exports = { getProductos }