const express = require('express')
const multer = require('multer')
const app = express()
const puerto = 8080
const rutasApi = require('./routes/rutasApi')

app.use(express.json())
app.use(express.urlencoded({ extended:true }))

app.use('/uploads',express.static('uploads'))

app.use('/api/productos',rutasApi)

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/html/index.html')
})

app.listen(puerto, (req,res)=>{
    console.log(`Escuchando el puerto ${puerto}`)
}).on('error',(e)=>{
    console.log(`Problemas de conexión ${e.message}`)
})

