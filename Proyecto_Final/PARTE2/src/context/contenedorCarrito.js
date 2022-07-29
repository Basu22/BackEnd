import connectMongo from "../connection/connectMongo";
import connectFirebase from "../connection/connectFirebase";
import dotenv from 'dotenv'
dotenv.config()

switch (process.env.MOTOR) {
    case 'firebase':
        try{
            admin.initializeApp({
                credential: admin.credential.cert(connectFirebase)
            });
        }catch(e){
 /*  */           console.log('switch firebase', e)
        }
        break;
    case 'mongo':
        try {
            await mongoose.connect(connectMongo)
        } catch (e) {
            console.log('switch mongo', e)
        }
    break;
    default:
        console.log("Error en switcheo - contenedorProducto.js")
        break;
}

class contenedorCarrito{
    constructor(filename, carrito) {
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

export default contenedorCarrito