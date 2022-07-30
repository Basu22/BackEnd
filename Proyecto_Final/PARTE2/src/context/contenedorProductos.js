import mongoose from "mongoose";


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
        let data = await this.collection.find({id_producto:id})
        if (!data.length) {
            return {error:"no se encuentra el producto"};
        } else {
            return data;
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
            data =
            {
                id:id+1,
                nombre,
                descripcion,
                codigo,
                foto,
                precio,
                stock
            }
            const producto = new this.collection(data)
            await producto.save()
        }
        return res.sendStatus(201)
    }
    
    async update(nombre,descripcion,codigo,foto,precio,stock,id,res){
        let data = await this.collection.find({ id_producto:id })
        if( id>0 ){
            if (!producto.length){
                return res.json({ error: 'producto no encontrado' })
            }else{
                if(!nombre||!descripcion||!codigo ||!foto||!precio||!stock){
                    res.json({ error: 'ingrese datos para actualizar' })
                }else{
                    await this.collection.updateOne({ id_producto:id },{
                        $set:{
                            nombre:nombre,
                            descripcion:descripcion, 
                            codigo:codigo,
                            foto:foto,
                            precio:precio,
                            stock:stock
                            }
                        })
                    return res.sendStatus(201)
                }
            }
        }else{
            return res.json({ error: 'ingrese un ID mayor a 0' })
        }
    }
    
    async erase (id, res){
        let data = await this.collection.find({ id_producto:id })
        if ( data.length > 0 ){
                try{
                    await this.collection.deleteOne({ id_producto:id })
                    return res.sendStatus(200)
                }catch(e){
                    return console.log(e)
                }
        }else{
            return res.json({ error : 'producto no encontrado' })
            }
        }
    
}





export default ContenedorMongo