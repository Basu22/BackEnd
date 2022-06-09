//SERVIDOR CON HTTP
/* const http = require('http')
const puerto = 8080
let saludoDiario =""

if(new Date().getHours()>=6&&new Date().getHours()<=12){
    saludoDiario = "Buenos Días!"
} else if (new Date().getHours()>=13&&new Date().getHours()<=19){
    saludoDiario = "Buenas Tardes!"
} else {
    saludoDiario = "Buenas Noches!"
}

const server = http.createServer((req, res)=>{
    res.end(`${saludoDiario}, bienvenido a nuestro server http`)
})


server.listen(puerto, ()=>{
    console.log(`Servidor escuchando puerto: ${puerto}`)
}) */

//SERVIDOR CON EXPRESS
const express = require('express')
const app = express()
const puerto = 8080
let visitas = 0

app.listen(puerto, ()=>{
    console.log(`El servidor se inicio en el puerto ${puerto}`)
    console.log(new Date().toLocaleDateString() + new Date().toLocaleTimeString())
})


app.get('/',(req, res)=>{
    res.send('<h1 style="color:blue">Hola soy Home</h1>')
})


app.get('/visitas',(req, res)=>{
    visitas++
    res.send(`La pagina obtuvo la cantidad de ${visitas} visitas`)
})


app.get('/user',(req, res)=>{
    console.log(new Date())
    res.send('Hola soy User')
})