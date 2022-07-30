let ProductoDAO
let CarritoDAO
import ProductoDAOmongo from './productoDAOmongo.js'
import ProductoDAOfirebase from './productoDAOfirebase.js'
import CarritoDAOmongo from './carritoDAOmongo.js'
import dotenv from 'dotenv'
dotenv.config()

switch (process.env.MOTORDB) {
    case 'mongo':
        ProductoDAO = new ProductoDAOmongo()
        CarritoDAO = new CarritoDAOmongo()
        break;
    case 'firabase':
        ProductoDAO = new ProductoDAOfirebase()
        CarritoDAO = new CarritoDAOfirebase()
        break;
    default:
        break;
}

export {ProductoDAO, CarritoDAO}