import mongoose from "mongoose";
import connectMongo from '../connection/connectMongo.js'
import ContenedorMongo from "../context/contenedorProductos.js";
import ProductoEsquema from "../schema/esquemaProductos.js";
import dotenv from 'dotenv'
dotenv.config()

mongoose.connect(connectMongo.mongodb)


class ProductoDAOmongo extends ContenedorMongo {
    constructor(){
        super(process.env.PRODUCTOS,ProductoEsquema)
    }
}


export default ProductoDAOmongo