const { Router } = require('express')
const router = Router()
let persona = []

router.get('/',(req,res)=>{
    res.json(persona)
})

router.post ('/',(req,res)=>{
    const { nombre,apellido,edad } = req.body
    persona.push({ nombre,apellido,edad })
    res.sendStatus(201)
})

module.exports = router