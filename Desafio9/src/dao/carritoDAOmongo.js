import mongoose from "mongoose";
import connectMongo from '../connection/connectMongo.js'
import contenedorCarrito from "../context/contenedorCarrito.js";
import CarritoEsquema from "../schema/esquemaCarrito.js";
import dotenv from 'dotenv'
dotenv.config()

mongoose.connect(connectMongo.mongodb)


class CarritoDAOmongo extends contenedorCarrito {
    constructor(){
        super(process.env.CARRITO,CarritoEsquema)
    }
}


export default CarritoDAOmongo