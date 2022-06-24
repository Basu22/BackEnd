const express = require('express')
const app = express()
const puerto = 8080
const rutaProductos = require('./src/routes/routerProductos')
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({ extended : true }))

app.use('/src/upload',express.static('./src/upload'))
app.use('/productos', rutaProductos)

app.set('views',path.join(__dirname,'./src/views'))
app.set('view engine', 'ejs')

app.listen(puerto, ()=>{
    console.log(`Escuchando puerto :: ${puerto}`)
}).on("error", (e)=>{
    console.log(`Houston tenemos un problema de conexion! :: ${e}`)
})
