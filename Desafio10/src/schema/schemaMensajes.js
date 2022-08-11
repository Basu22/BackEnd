import mongoose from "mongoose"

const esquemaMensajes = new mongoose.Schema({
        autor:{
            id: { type: String, required: true },
            nombre: { type: String, required: true },
            apellido: { type: String, required: true },
            edad: { type: Number, required: true },
            alias: { type: String, required: true },
            avatar: { type: String, required: true },
            },
        text:{ type: String, required: true }
    }
)


export default esquemaMensajes
