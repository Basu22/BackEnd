// primero - set de conexión
const express = require('express')
const app = express()
const puerto = 8080
// segundo - ruteo
const rutasMascotas = require('./routes/rutasMascotas')
const rutasPersonas = require('./routes/rutasPersonas')
//configuración para trabajar el body como json
app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use('/imagenes',express.static('public'))
app.use(express.static('html'))

//ruteamos a mascotas y personas
app.use('/mascotas',rutasMascotas)
app.use('/personas',rutasPersonas)

//podemos enviar por get la ruta hacia un archivo estatico 
//en este caso estamos mostrando el index.html en la raiz del localhost
app.get('/',(req,res)=>{
    res.sendFile( __dirname + '/index.html')
})

//creamos la conexion al 8080
app.listen(8080,()=>{
    console.log(`Escuchando el puerto: ${puerto}` )
})


