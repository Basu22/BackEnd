import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
const app = express();
import path from 'path';
const __dirname = path.resolve()
import { Server } from 'socket.io';
import esquemaMensajes from './src/schema/schemaMensajes.js';
import Mensajes from './src/class/mensajes.js';
import rutas from './src/router/routerProductos.js';

const expressServer = app.listen(process.env.PUERTO, ()=>{
    try{
        console.log("hay conexion!",process.env.PUERTO)
    }catch(e){
        console.log("nos surgio un error",e)
    }
})

const io = new Server(expressServer)


app.use(express.json())
app.use(express.urlencoded({ extended : true }))

app.use('/src/chat',express.static('./src/chat'))
app.use('/src/upload',express.static('./src/upload'))
app.use('/css', express.static('./src/css'))
app.use('/', rutas)
app.set('views',path.join(__dirname,'./src/views'))
app.set('view engine', 'ejs')




io.on('connection', async (socket) => {
    const db = new Mensajes(process.env.TABLA_MENSAJES,esquemaMensajes)
    const mensajes = await db.getAll()
    console.log(`Se conecto un nuevo Cliente ${socket.id}`)
    io.emit('server:mensaje',mensajes)
    socket.on('cliente:mensaje', async(mensajesInfo) =>{
            db.save(mensajesInfo)
            const mensajes = await db.getAll()
            io.emit('server:mensaje',mensajes)
        })
})