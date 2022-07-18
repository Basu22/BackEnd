require('dotenv').config()
const express = require('express')
const app  = express()
const path = require('path')
const rutaProductos = require('./src/routes/routerProductos')
const rutaFormulario = require('./src/routes/routerFormularios')
const puerto = process.env.PUERTO
//acceder a SocketIO
const { Server:IOServer } = require('socket.io')
const expressServer = app.listen(puerto, ()=>{
    try{
        console.log("hay conexion!",puerto)
    }catch(e){
        console.log("nos surgio un error",e)
    }
        
})
const io = new IOServer(expressServer)

app.use(express.json())
app.use(express.urlencoded({ extended : true }))

app.use(express.static(path.join(__dirname,'./src/public')))
app.use('/src/upload',express.static('./src/upload'))
app.use('/css', express.static('./src/css'))
app.use('/productos', rutaProductos)
app.use('/formulario', rutaFormulario) 

app.set('views',path.join(__dirname,'./src/views'))
app.set('view engine', 'ejs')

const messagesArray = []

io.on('connection', socket => {
    
    console.log(`Se conecto un nuevo Cliente ${socket.id}`)
    
    io.emit('server:mensaje',messagesArray)
    
    socket.on('cliente:mensaje', messageInfo =>{
        
        messagesArray.push(messageInfo)
        
        io.emit('server:mensaje',messagesArray)
    })
})