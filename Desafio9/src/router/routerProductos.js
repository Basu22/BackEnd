import { Router } from 'express'
const rutas = Router()
import { getProductosTest } from '../controllers/controllersProductosTest.js'
import { getProductos, addProductos } from '../controllers/controllersProductos.js'
import multer from 'multer'


let storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, './src/upload')
    },
    filename:(req,file,cb)=>{
        cb(null, Date.now()+ '-' +file.originalname )
    }
})
let upload = multer({ storage })

rutas
    .route('/api/productos')
    .get(getProductos)
    .post(upload.single('thumbnail'),addProductos)

rutas
    .route('/api/productos-test')
    .get(getProductosTest)



export default rutas