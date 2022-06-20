const { Router } = require('express')
const router = Router()
const productos = [{
        title:"Comen 2 Pican 3",
        price: 1150,
        thumbnail: ' https://www.res.com.ar/media/catalog/product/cache/dbcd7fcd96d4e43f69e3e3703d135006/p/i/picada-grande.jpg '
    },
    {
        title:"Comen 4 Pican 6",
        price: 1750,
        thumbnail: "https://www.res.com.ar/media/catalog/product/cache/dbcd7fcd96d4e43f69e3e3703d135006/p/i/picada-grande.jpg"
    },
    {
        title:"Comen 8 Pican 10",
        price: 2450,
        thumbnail: "https://www.res.com.ar/media/catalog/product/cache/dbcd7fcd96d4e43f69e3e3703d135006/p/i/picada-grande.jpg"
    }]

const champs = [{nombre: "Baslio"}, {nombre:"Salvador"}, {nombre:"Julieta"}]

    router.get('/product/:indice',(req, res)=>{
        const indice = Number(req.params.indice)
        res.render('products',productos[indice])
    })

    router.get('/champs',(req, res)=>{
        const indice = Number(req.params.indice)
        res.render('champs',{champs , hasAny: true})
    })

module.exports = router