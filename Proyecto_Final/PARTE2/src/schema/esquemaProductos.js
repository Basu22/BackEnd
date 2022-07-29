import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const ProductoEsquema = new mongoose.Schema({
    id:{type:Number, required:true},
    nombre:{type:String, required:true},
    descripcion:{type:String, required:true},
    codigo:{type:String, required:true},
    foto:{type:String, required:true},
    precio:{type:Number, required:true},
    stock:{type:Number, required:true},
}, {timestamp:true})

export default ProductoEsquema


