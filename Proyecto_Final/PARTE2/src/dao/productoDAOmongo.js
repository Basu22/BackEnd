import mongoose from "mongoose";
import connectMongo from '../connection/connectMongo.js'
import ContenedorMongo from "../context/contenedorProductos.js";
import Producto from "../schema/esquemaProductos.js";
import dotenv from 'dotenv'
dotenv.config()

mongoose.connect(connectMongo.mongodb)

class ProductoDAOmongo extends ContenedorMongo {
    constructor(){
        super(process.env.PRODUCTOS,Producto)
    }
}


export default ProductoDAOmongo