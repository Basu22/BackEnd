require('dotenv').config()
const fs = require('fs')
const express = require('express')
const app = express()
const puerto = process.env.PUERTO
const rutas = require("./src/routers/rutas")

app.use(express.json())
app.use(express.urlencoded({ extended:true }))

app.use("/",rutas)

app.listen(puerto, ()=>{
    console.log(`Escuchando puerto: ${puerto}`)
})