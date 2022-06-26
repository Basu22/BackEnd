const express = require('express')
const app = express()
const puerto = 8080
const rutaProductos = require('./src/routes/routerProductos')
const rutaFormularios = require('./src/routes/routerFormularios')
const path = require('path')
const { engine } = require('express-handlebars')

app.use(express.json())
app.use(express.urlencoded({ extended : true }))

app.use('/css', express.static('./src/css'))
app.use('/src/upload',express.static('./src/upload'))
app.use('/productos', rutaProductos)
app.use('/formulario',rutaFormularios)

app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: path.join(__dirname,'./src/views/productos'),
    layoutsDir: path.join(__dirname, './src/views'),
    partialsDir: path.join(__dirname, './src/views/partials' )
}))

app.set('views', path.join(__dirname,'./src/views'))
app.set('view engine', 'hbs')

app.listen(puerto, ()=>{
    console.log(`Escuchando puerto :: ${puerto}`)
}).on("error", (e)=>{
    console.log(`Houston tenemos un problema de conexion! :: ${e}`)
})
