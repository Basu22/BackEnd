import admin from 'firebase-admin'
import credentials from '../connection/connectFirebase.js';
import ContenedorMongo from "../context/contenedorProductos.js";


admin.initializeApp({
    credential: admin.credential.cert(credentials.authFirebase)
});

class ProductoDAOfirebase extends ContenedorMongo {
    constructor(){
        super(process.env.PRODUCTOS,esquemaProductos)
    }
}

export default ProductoDAOfirebase