import dotenv from 'dotenv'
dotenv.config()
import { databaseMaria } from '../db/SQLconnect.js'
import Articulos from '../class/articulos.js'


const data = new Articulos(databaseMaria,process.env.TABLA_ARTICULOS)

const getProductos = async (req,res)=>{
        const username = req.session.username
        if (!username){
                res.redirect('/')
        }else{
                const productos = await data.getAll()
                res.render('main.ejs',{productos, username})
        }
}

const addProductos = async(req, res)=>{
        try{
                data.save({
                        title:req.body.name,
                        thumbnail: `${req.file.destination}/${req.file.filename}`,
                        price:Number(req.body.price)
                })
                const productos = await data.getAll()
                res.render('main.ejs',{productos})
        }catch(e){
                console.log(e)
        }
}


export { getProductos, addProductos }