const { Router } = require('express')
const router = Router()
let mascotas = []

router.get('/',(req,res)=>{
    res.json(mascotas)
})

router.post ('/',(req,res)=>{
    const { nombre,raza,edad } = req.body
    mascotas.push({ nombre,raza,edad })
    res.sendStatus(201)
})

module.exports = router