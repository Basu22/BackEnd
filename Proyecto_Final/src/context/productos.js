const fs = require ('fs')
var moment = require('moment');

class Productos {
    constructor(filename) {
        this.filename = filename;
    }
    
    async getAll() {
        let data = await fs.promises.readFile(`./${this.filename}`, "utf-8");
        if (!data) {
            return data;
        } else {
            data = JSON.parse(data);
            return data;
        }
    }
    
    
    async getByID(id) {
        let data = JSON.parse(await fs.promises.readFile(`./${this.filename}`, "utf-8"));
        let producto = data.filter(producto=>producto.id === Number(id))
        if (!producto) {
            return res.json({error:"no se encuentra el producto"});
        } else {
            return producto;
        }
    }
    
    async save(nombre,descripcion,codigo,foto,precio,stock,res) {
        let data = JSON.parse(await fs.promises.readFile(`./${this.filename}`, "utf-8"))
        let id = (await this.getAll()).length
        if (!data) {
            data = [
                {
                    id:1,
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

class Carrito extends Productos{
    constructor(filename, carrito) {
        super()
        this.filename = filename;
        this.carrito = carrito
    }

    async getAllCarrito(res){
        let carrito = JSON.parse(await fs.promises.readFile(`./${this.carrito}`, "utf-8"));
        if (!carrito.length){
            res.json({error:"El carrito esta vacío!"})
        }else{
            res.json({carrito})
        }
    }

    async buildCarrito(res){
        let carrito = JSON.parse(await fs.promises.readFile(`./${this.carrito}`, "utf-8"));
        if (!carrito.length){
            let carrito_de_compras = [
                {
                    id:1,
                    timestamp:moment().format("DD/MM/YYYY HH:MM:SS"),
                    productos:[]
                }
            ]
            fs.promises.writeFile(`./${this.carrito}`,JSON.stringify(carrito_de_compras))
            res.json({Alert:`Se creó carrito con ID 1`})
        }else{
            let carrito_de_compras = [...carrito,
                {
                    id:carrito.length+1,
                    timestamp:moment().format("DD/MM/YYYY HH:MM:SS"),
                    productos:[]
                }
            ]
            fs.promises.writeFile(`./${this.carrito}`,JSON.stringify(carrito_de_compras))
            res.json({Alert:`Se creó carrito con ID ${carrito.length+1}`})
        }
    } 
    
    async addItemCarrito(id,idProducto,res){
        //busco los productos que quiero ingresar con el metodo de Productos
        const producto = await this.getByID(idProducto)
        //me traigo todos los carritos
        let carritos = JSON.parse(await fs.promises.readFile(`./${this.carrito}`, "utf-8"));
        //ubico la posisicion del carrito en cuestion en el array
        let posicion = carritos.findIndex(carrito=>carrito.id === Number(id))
        //me traigo todos los productos que tengo en ese carrito.
        let productosCarrito = carritos[posicion].productos
        
        if (!carritos[posicion].productos.length){
            let carrito_de_compras = [producto[0]] 
            carritos[posicion].productos = carrito_de_compras
            fs.promises.writeFile(`./${this.carrito}`,JSON.stringify(carritos))
            res.sendStatus(201)
        }else{
            let carrito_de_compras = [...productosCarrito, producto[0]] 
            carritos[posicion].productos = carrito_de_compras
            fs.promises.writeFile(`./${this.carrito}`,JSON.stringify(carritos))
            res.sendStatus(201)
        }
    }

    async eraseCarrito (id, res){
        let carritos = JSON.parse(await fs.promises.readFile(`./${this.carrito}`, "utf-8"))
        let posicion = carritos.findIndex(carrito=>carrito.id === Number(id))
        if (id < 1  || posicion===-1 ){
            res.json({ error : 'producto no encontrado' })
        }else{
            carritos.splice(posicion,1)
            await fs.promises.writeFile(`./${this.carrito}`,JSON.stringify(carritos))
            res.sendStatus(200)
        }
    }

    async eraseItemCarrito (id,id_prod,res){
        //me traigo todos los carritos
        let carritos = JSON.parse(await fs.promises.readFile(`./${this.carrito}`, "utf-8"))
        //obtengo la posicion del carrito de compras con el que quiero interactuar
        let posicion = carritos.findIndex(carrito=>carrito.id === Number(id))
        //obtengo la posicion del producto dentro del array del carrito
        let posicion_producto = carritos[posicion].productos.findIndex(producto=>producto.id === Number(id_prod))
        if (id < 1  || posicion_producto===-1 ){
            res.json({ error : 'producto no encontrado' })
        }else{
            carritos[posicion].productos.splice(posicion_producto,1)        
            await fs.promises.writeFile(`./${this.carrito}`,JSON.stringify(carritos))
            res.sendStatus(200)
        }
    }
}



module.exports = { Productos, Carrito }