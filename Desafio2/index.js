const c2p3 = {
                title:"Comen2Pican3",
                price: 2500,
                thumbnail:'https://www.res.com.ar/media/catalog/product/cache/dbcd7fcd96d4e43f69e3e3703d135006/p/i/picada-grande.jpg'
            }

const c4p6 = {
                title:"Comen4Pican6",
                price: 3000,
                thumbnail:'http://www.gruyenthal.com.ar/imagenes/pc/picada8b.jpg'
            }

const c8p10 = {
                title:"Comen8Pican10",
                price: 3500,
                thumbnail:'https://storage.googleapis.com/diariodemocracia/cache/cc/53/picada2-1-6e7c69.jpg'
            }

const fs = require ('fs')
            
class Contenedor {
    constructor(filename) {
        this.filename = filename;
    }

    async save(objeto) {
        let data = await fs.promises.readFile(`./${this.filename}`, "utf-8")
        if (!data) {
            objeto.id = 1;
            const arr = [objeto];
            await fs.promises.writeFile(`./${this.filename}`, JSON.stringify(arr));
            return objeto.id;
        } else {
            data = JSON.parse(data);
            objeto.id = data.length + 1;
            data.push(objeto);
            await fs.promises.writeFile(`./${this.filename}`, JSON.stringify(data));
            return objeto.id;
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

    async getAll() {
        let data = await fs.promises.readFile(`./${this.filename}`, "utf-8");

        if (!data) {
            return null;
        } else {
            data = JSON.parse(data);
            return data;
        }
    }

    async deleteById(number) {
        let data = await fs.promises.readFile(`./${this.filename}`, "utf-8");

        if (data) {
            data = JSON.parse(data);

            data.forEach(element => {
                if (element.id == number) {
                    data.splice(number - 1, 1)
                }
            })

            return data;
        }
    }

    async deleteAll() {
        let data = await fs.promises.readFile(`./${this.filename}`, "utf-8");
        let tamanio = data.length;

        if (data) {
            data.splice(0, tamanio);
        }
    }

}



const picada = new Contenedor("productos.txt")

picada.save(c2p3)
.then(id=>{
        console.log(id)
        picada.save(c4p6)
            .then(id2=>{
                console.log(id2)
                picada.save(c8p10)
                    .then(id3=>console.log(id3))
                })
        })
/*

Tomar en consideración el contenido previo del archivo, en caso de utilizar uno existente.
Implementar el manejo de archivos con el módulo fs de node.js, utilizando promesas con async/await y manejo de errores.
Probar el módulo creando un contenedor de productos, que se guarde en el archivo: “productos.txt”
Incluir un llamado de prueba a cada método, y mostrando por pantalla según corresponda para verificar el correcto funcionamiento del módulo construído. 
El formato de cada producto será : 

{
    title: (nombre del producto),
    price: (precio),
    thumbnail: (url de la foto del producto)
}

>> Ejemplo:
Contenido de "productos.txt" con 3 productos almacenados 
[                                                                                                                                                     
    {                                                                                                                                                    
        title: 'Escuadra',                                                                                                                                 
        price: 123.45,                                                                                                                                     
        thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',                                     
        id: 1                                                                                                                                              
    },                                                                                                                                                   
    {                                                                                                                                                    
        title: 'Calculadora',                                                                                                                              
        price: 234.56,                                                                                                                                     
        thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',                                          
        id: 2                                                                                                                                              
    },                                                                                                                                                   
    {                                                                                                                                                    
        title: 'Globo Terráqueo',                                                                                                                          
        price: 345.67,                                                                                                                                     
        thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',                                   
        id: 3                                                                                                                                              
    }                                                                                                                                                    
]  


*/

