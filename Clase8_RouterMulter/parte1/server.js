const express = require('express')
const app = express()
const rutas = require('./router/index')
const puerto = 8080

router.use('/api',rutas)

app.listen(puerto,()=>{
    console.log(`Servidor escuchando puerto : ${puerto}`)
})


