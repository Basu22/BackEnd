require('dotenv').config()
const databaseMaria = require('../db/SQLconnect')
const { Articulos } = require('../class/articulos')

const getProductos = async (req,res)=>{
        const data = new Articulos(databaseMaria,process.env.TABLA)
        const productos = await data.getAll()
        res.render('main.ejs',{productos})
}

const addProductos = async(req, res)=>{
        try{
                const data = new Articulos(databaseMaria,process.env.TABLA)
                data.save({
                        title:req.body.name,
                        price:Number(req.body.price),
                        thumbnail: `${req.file.destination}/${req.file.filename}`
                })
                const productos = await data.getAll()
                res.render('main.ejs',{productos})
        }catch(e){
                console.log(e)
        }
}


module.exports = { getProductos, addProductos }