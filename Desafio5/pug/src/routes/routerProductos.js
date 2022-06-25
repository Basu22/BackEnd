const { Router } = require('express')
const router = Router()
const { getProductos, addProductos } =  require('../controllers/controllersProductos')
const multer = require('multer')


let storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, './src/upload')
    },
    filename:(req,file,cb)=>{
        cb(null, Date.now()+ '-' +file.originalname )
    }
})
let upload = multer({ storage })

router.get('/', getProductos)

router.post('/',upload.single('thumbnail'),addProductos)

module.exports = router