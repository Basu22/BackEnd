import mongoose from 'mongoose'
import { ProductoDAO } from '../dao/switchDAO.js';
import dotenv from 'dotenv'
dotenv.config()

class contenedorCarrito{
    constructor(nombreColeccion, Carrito) {
        this.collection = mongoose.model(nombreColeccion,Carrito);
    }

    async getAllCarrito(res){
        let carrito = await this.collection.find()
        if (!carrito.length){
            res.json({error:"El carrito esta vacío!"})
        }else{
            res.json({carrito})
        }
    }

    async buildCarrito(res){
        let carrito = this.collection.find()
        if (!carrito.length){
            let carrito_de_compras = { id_carrito:1, productos:[] }
            const carrito = new this.collection(carrito_de_compras)
            await carrito.save()
            res.json({Alert:`Se creó carrito con ID 1`})
        }else{
            let carrito_de_compras = { id_carrito:carrito.length+1, productos:[] }
            const carrito = new this.collection(carrito_de_compras)
            await carrito.save()
            res.json({Alert:`Se creó carrito con ID ${carrito.length+1}`})
        }
    }

    async addItemCarrito(id,idProducto,res){
        //busco el producto a ingresar
        const productos = await ProductoDAO.getByID(idProducto)
        //updateo sobre el carrito en cuestion al array de productos
        await this.collection.updateOne({id_carrito:id},{$push:{productos:productos[0]}})
        res.sendStatus(201)
    }

    async eraseCarrito (id, res){
        let carrito = await this.collection.find({id_carrito:id})
        if (!carrito.length){
            res.json({ error : 'carrito no encontrado' })
        }else{
            await this.collection.deleteOne({id_carrito:id})
            res.sendStatus(200)
        }
    }

    async eraseItemCarrito (id,id_prod,res){
        //me traigo todos los carritos
        await this.collection.updateOne({id_carrito:id},{$pull:{productos:{id_producto:Number(id_prod)}}})
        res.sendStatus(200)
    }
}

export default contenedorCarrito