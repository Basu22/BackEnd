const express = require('express')
const app = express()
const path = require('path')
const rutas = require('./src/routes/router')

app.set('views', path.join(__dirname, './src/views'))
app.set('view engine', 'ejs')

app.use('/datos',rutas)

app.listen(8080,()=>{
    console.log('Escuchando el puerto 8080')
})

