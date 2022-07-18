require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const rutaProductos = require('./src/router/routerProductos')
const { Server:IOServer } = require('socket.io')
const {databaseLite} = require('./src/db/SQLconnect')
const Mensajes = require('./src/class/mensajes')

const expressServer = app.listen(process.env.PUERTO, ()=>{
    try{
        console.log("hay conexion!",process.env.PUERTO)
    }catch(e){
        console.log("nos surgio un error",e)
    }
})

const io = new IOServer(expressServer)

app.use(express.json())
app.use(express.urlencoded({ extended : true }))

app.use('/src/chat',express.static('./src/chat'))
app.use('/src/upload',express.static('./src/upload'))
app.use('/css', express.static('./src/css'))
app.use('/', rutaProductos)

app.set('views',path.join(__dirname,'./src/views'))
app.set('view engine', 'ejs')




io.on('connection', async (socket) => {
    const db = new Mensajes(databaseLite,process.env.TABLA_MENSAJES)
    const mensajes = await db.getAll()
    console.log(`Se conecto un nuevo Cliente ${socket.id}`)
    io.emit('server:mensaje',mensajes)
        socket.on('cliente:mensaje', async(mensajesInfo) =>{
            db.save(mensajesInfo)
            const mensajes = await db.getAll()
            io.emit('server:mensaje',mensajes)
        })
})