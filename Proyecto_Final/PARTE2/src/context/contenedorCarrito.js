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
        console.log(id)
        let carritos = await this.collection.aggregate([{$match:{id_carrito:id}}])
        console.log(carritos)
        res.sendStatus(200)
/*         //obtengo la posicion del carrito de compras con el que quiero interactuar
        let posicion = carritos.findIndex(carrito=>carrito.id === Number(id))
        //obtengo la posicion del producto dentro del array del carrito
        let posicion_producto = carritos[posicion].productos.findIndex(producto=>producto.id === Number(id_prod))
        if (id < 1  || posicion_producto===-1 ){
            res.json({ error : 'producto no encontrado' })
        }else{
            carritos[posicion].productos.splice(posicion_producto,1)        
            await fs.promises.writeFile(`./${this.carrito}`,JSON.stringify(carritos)) 
        }*/
    }
}

export default contenedorCarrito