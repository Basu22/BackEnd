const e = require('express')
const express = require('express')
const app = express()
const puerto = 8080
const rutasPersonas = require('./src/routes/rutaPersonas')
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({ extended : true }))

app.use('/personas',rutasPersonas)

app.set('views', path.join(__dirname, './src/views'))
app.set('view engine', 'ejs')

app.listen(puerto, ()=>{
    try{
        console.log(`Escuchando puerto: ${puerto}`)
    }catch(e){
        console.log(e.message)
    }
})