const express = require('express')
const app = express()
const rutas = require('./routes/index')
const path = require('path')
const fs = require('fs');

app.use(express.static('public'))

// defino el motor de plantilla
app.engine('cte', function (filePath, options, callback) {
    fs.readFile(filePath, function (err, content) {
        if (err) {
            return callback(new Error(err));
        }
        const rendered = content.toString()
        .replace('^^title$$', ''+ options.title +'')
        .replace('^^mesagge$$', ''+ options.message +'')
        .replace('^^autor$$', ''+ options.autor +'')
        .replace('^^Version$$',''+ options.version)
        .replace('^^nombre$$',''+ options.nombre)
        .replace('^^apellido$$',''+ options.apellido)
        .replace('^^fechaYhora$$',''+ options.fechaYhora)
        return callback(null, rendered);
    });
});

app.set('view engine', 'cte'); // registra el motor de plantillas
app.set('views',path.join(__dirname, './views')) //especifica la carpeta de plantillas.
app.use('/',rutas) 


app.listen(8080,()=>{
    console.log('Escuchando el puerto: 8080')
})
