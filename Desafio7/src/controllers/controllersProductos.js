require('dotenv').config()
const { databaseMaria } = require('../db/SQLconnect')
const Articulos = require('../class/articulos')
const data = new Articulos(databaseMaria,process.env.TABLA_ARTICULOS)

const getProductos = async (req,res)=>{
        const productos = await data.getAll()
        res.render('main.ejs',{productos})
}

const addProductos = async(req, res)=>{
        try{
                data.save({
                        title:req.body.name,
                        thumbnail: `${req.file.destination}/${req.file.filename}`,
                        price:Number(req.body.price)
                })
        }catch(e){
                console.log(e)
        }
        getProductos(req,res)
}


module.exports = { getProductos, addProductos }