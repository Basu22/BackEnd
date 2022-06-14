const express = require('express')
const app = express()
const puerto = 8080


app.listen(puerto, (req,res)=>{
    console.log(`Escuchando el puerto ${puerto}`)
})

