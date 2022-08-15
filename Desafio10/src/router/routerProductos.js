import { Router } from 'express'
const rutasProductos = Router()
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

rutasProductos
    .route('/productos')
    .get(getProductos)
    .post(upload.single('thumbnail'),addProductos)

rutasProductos
    .route('/productos-test')
    .get(getProductosTest)

export default rutasProductos