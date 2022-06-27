const { Router } = require('express')
const router = Router()
const { addProductos, mostrarFormulario } =  require('../controllers/controllersFormulario')
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

router.get('/', mostrarFormulario)

router.post('/',upload.single('thumbnail'),addProductos)

module.exports = router