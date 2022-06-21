const express = require('express')
const app = express()
const path = require('path')
const rutas = require('./src/routes/router')

app.set('views', path.join(__dirname, './src/views'))
app.set('view engine', 'pug')

app.use('/',rutas)

app.listen(8080,()=>{
    console.log('Escuando el puerto 8080')
})

