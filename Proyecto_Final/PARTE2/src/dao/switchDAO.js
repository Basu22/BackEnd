let ProductoDAO
let CarritoDAO
import ProductoDAOmongo from './productoDAOmongo.js'
import ProductoDAOfirebase from './productoDAOfirebase.js'
import dotenv from 'dotenv'
dotenv.config()

switch (process.env.MOTORDB) {
    case 'mongo':
        ProductoDAO = new ProductoDAOmongo()
        break;
    case 'firabase':
        ProductoDAO = new ProductoDAOfirebase()
        break;
    default:
        break;
}

export default ProductoDAO