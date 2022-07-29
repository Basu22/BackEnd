import dotenv from 'dotenv'
import mongoose from "mongoose";
import moment from 'moment'
import ProductoEsquema from '../schema/esquemaProductos.js';
dotenv.config()

class ContenedorMongo {
    constructor(nombreColeccion, Producto) {
        this.collection = mongoose.model(nombreColeccion,Producto);
    }
    
    async getAll() {
        const data = await this.collection.find()
        if (!data) {
            return {error:"no hay productos"}
        } else {
            return data;
        }
    }

    async getByID(id) {
        let data = await this.collection.find()
        let producto = data.filter(producto=>producto.id === Number(id))
        if (!producto.id) {
            return {error:"no se encuentra el producto"};
        } else {
            return producto;
        }
    }
    
    async save(nombre,descripcion,codigo,foto,precio,stock,res) {
        let data = await this.collection.find()
        let id = (await this.collection.find()).length
        if (!id) {
            data = 
                {
                    id:1,
                    nombre,
                    descripcion,
                    codigo,
                    foto,
                    precio,
                    stock
                }
            const producto = new this.collection(data)
            await producto.save()
        } else {
            data = [...data, 
                {
                    id:id+1,
                    timestamp:moment().format("DD/MM/YYYY HH:MM:SS"),
                    nombre,
                    descripcion,
                    codigo,
                    foto,
                    precio,
                    stock
                }
            ]
            await fs.promises.writeFile(`./${this.filename}`, JSON.stringify(data));
        }
        res.sendStatus(201)
    }
    
    async update(nombre,descripcion,codigo,foto,precio,stock,id,res){
        let data = JSON.parse(await fs.promises.readFile(`./${this.filename}`, "utf-8"))
        let producto = data.filter(producto=>producto.id === Number(id))
        if(id>0){
            if (!producto.length){
                return res.json({ error: 'producto no encontrado' })
            }else{
                if(!nombre||!descripcion||!codigo ||!foto||!precio||!stock){
                    res.json({ error: 'ingrese datos para actualizar' })
                }else{
                    data[id-1].nombre = nombre
                    data[id-1].descripcion = descripcion
                    data[id-1].codigo = codigo
                    data[id-1].foto = foto
                    data[id-1].precio = precio
                    data[id-1].stock = stock
                    await fs.promises.writeFile(`./${this.filename}`,JSON.stringify(data))
                    return res.sendStatus(201)
                }
            }
        }else{
            return res.json({ error: 'ingrese un ID mayor a 0' })
        }
    }
    
    async erase (id, res){
        let data = JSON.parse(await fs.promises.readFile(`./${this.filename}`, "utf-8"))
        let posicion = data.findIndex(producto=>producto.id === Number(id))
        if (id < 1  || posicion===-1 ){
            res.json({ error : 'producto no encontrado' })
        }else{
            data.splice(posicion,1)
            await fs.promises.writeFile(`./${this.filename}`,JSON.stringify(data))
            res.sendStatus(200)
        }
    }
    
}





export default ContenedorMongo