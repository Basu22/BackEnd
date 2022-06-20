const express = require('express')
const app = express()
const rutas = require('./routes/index')
const path = require('path')
const { engine } = require('express-handlebars')
 
app.engine('hbs', engine({
    extname:'.hbs', //es la extensión que vamos a manejar con los handlebars
    defaultLayout: path.join(__dirname, './views/layout/main.hbs'), //indicamos la ruta default de los layout
    layoutsDir: path.join(__dirname, './views/layout/'), //indicamos la ruta default del directorio de los layout
    partialsDir: path.join(__dirname, './views/partials/')
}) )

app.set('view engine','hbs')
app.set('views', path.join(__dirname,'./views'))

app.use('/',rutas) 


app.listen(8080,()=>{
    console.log('Escuchando el puerto: 8080')
})
