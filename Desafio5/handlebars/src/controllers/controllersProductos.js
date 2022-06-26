const { Contenedor } = require('../../productos.js')

const getProductos = async (req,res)=>{
    try{
        const data = new Contenedor('productos.txt')
        const productos = await data.getAll()
        res.render('productos.hbs',{productos, layout:false})
    }catch(e){
            console.log(e)
    }
}


module.exports = { getProductos }