require('dotenv').config()
const express = require('express')
const app  = express()
const path = require('path')
const puerto = process.env.PUERTO
//acceder a SocketIO
const { Server:IOServer } = require('socket.io')
const expressServer = app.listen(puerto, ()=>{
    try{
        console.log("hay conexion!")
    }catch(e){
        console.log("nos surgio un error",e)
    }
        
})

const messagesArray = []
app.use(express.static(path.join(__dirname,'./src/public')))
const io = new IOServer(expressServer)

io.on('connection', socket => {
    
    console.log(`Se conecto un nuevo Cliente ${socket.id}`)
    
    io.emit('server:mensaje',messagesArray)
    
    socket.on('cliente:mensaje', messageInfo =>{
        
        messagesArray.push(messageInfo)
        
        io.emit('server:mensaje',messagesArray)
    })
})