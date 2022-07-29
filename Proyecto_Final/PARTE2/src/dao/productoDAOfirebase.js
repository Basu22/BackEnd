import ContenedorMongo from "../context/contenedorProductos.js";

class ProductoDAOfirebase extends ContenedorMongo {
    constructor(){
        super(process.env.PRODUCTOS,esquemaProductos)
    }
}

export default ProductoDAOfirebase