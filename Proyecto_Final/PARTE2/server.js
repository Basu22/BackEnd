import dotenv from 'dotenv'
dotenv.config()
import fs from 'fs'
import express from 'express'
const app = express()
const puerto = process.env.PUERTO
import rutas from './src/routers/rutas.js'

/* const express = require('express')
const rutas = require("./src/routers/rutas") */

app.use(express.json())
app.use(express.urlencoded({ extended:true }))

app.use("/",rutas)

app.listen(puerto, ()=>{
    console.log(`Escuchando puerto: ${puerto}`)
})