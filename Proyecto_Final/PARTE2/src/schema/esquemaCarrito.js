import mongoose from "mongoose"

const CarritoEsquema = new mongoose.Schema({
    id_carrito:{type:Number, required:true},
    productos:[]
}, {timestamps:{
        createdAt: 'created_at',
    }
})

export default CarritoEsquema


