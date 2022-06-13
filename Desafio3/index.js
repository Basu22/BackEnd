const fs = require('fs')
const express = require('express')
const app = express()
const puerto = 8080

class Contenedor {
    constructor(filename) {
        this.filename = filename;
    }

    async getAll() {
        let data = await fs.promises.readFile(`./${this.filename}`, "utf-8");

        if (!data) {
            return null;
        } else {
            data = JSON.parse(data);
            return data;
        }
    }

    async getById(number) {
        let data = await fs.promises.readFile(`./${this.filename}`, "utf-8");
        let res = null;
        
        if (!data) {
            return res;
        } else {
            data = JSON.parse(data);
            data.forEach(element => {
                if (element.id == number) {
                    res = element;
                }
            });
            return res;
        }
    }
}

const productos = new Contenedor("productos.txt")

app.listen(puerto,()=>{
    console.log(`El servidor se inicio en el puerto ${puerto}`)
})

app.get('/productos',async (req,resp)=>{
    const productosTotal = await productos.getAll()
    resp.send(productosTotal)
})
//a
app.get('/productoRandom',async (req,resp)=>{
    const productosTotal = await productos.getAll()
    const id = Math.floor(Math.random()*((productosTotal.length+1)-1)+1)
    const productoById = await productos.getById(id)
    resp.send(productoById)
})