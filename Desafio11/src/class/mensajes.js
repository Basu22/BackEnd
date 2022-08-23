import mongoose from "mongoose";
import connectMongo from '../connection/connectMongo.js'
import dotenv from 'dotenv'
dotenv.config()


mongoose.connect(connectMongo.mongodb)

class Mensajes {
    constructor(tabla, esquema) {
        this.collection = mongoose.model(tabla,esquema);
    }

    async save(objeto) {
        const data = {
            autor:{
                id:objeto.email,
                nombre:objeto.nombre,
                apellido:objeto.apellido,
                edad:Number(objeto.edad),
                alias:objeto.alias,
                avatar:objeto.avatar
            },
            text:objeto.mensaje
        }
        const mensaje = new this.collection(data)
        await mensaje.save()
    }

    async getAll() {
            const data = await this.collection.find()
            if (!data.length){
                console.log('No hay nada para mostrar!!!')
            }else{
                
            }
    }
}
export default Mensajes