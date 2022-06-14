const express = require('express')
const { Router } = require('express')
const router = Router()
const app = express()
const rutas = require('./router/index')
const puerto = 8080

app.use('/api',rutas)

app.get('/',(req,res)=>{
    res.send("hola!")
})

app.listen(puerto,()=>{
    console.log(`Servidor escuchando puerto : ${puerto}`)
})