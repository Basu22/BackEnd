const { Contenedor } = require('../../productos.js')
const producto = new Contenedor('productos.txt')

const getProductos = async (req,res)=>{
    try{
        producto.getAll().then(
            data=>res.render('main.ejs',{data, async:true})
            
        )
    }catch(e){
        console.log(e)
    }
}

module.exports = { getProductos }