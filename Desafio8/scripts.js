//1.crear una base de datos llamada ecommerce
use ecommerce

//que contenga dos colecciones: mensajes y productos.
db.createCollection('mensajes')
db.createCollection('productos')

//2.Agregar 10 documentos con valores distintos a las colecciones mensajes y productos. El formato de los documentos debe estar en correspondencia con el que venimos utilizando en el entregable con base de datos MariaDB. 
/* MENSAJES - email,fecha,mensaje */
const mensajes = [
    {email:"basilio.ossvald@gmail.com", fecha:"19/07/2022 14:59", mensaje:"Hola!" },
    {email:"bossvald@live.com", fecha:"19/07/2022 15:05", mensaje:"Como estas?" },
    {email:"basilio.ossvald@gmail.com", fecha:"19/07/2022 15:06", mensaje:"Bien! estaría necesitando una mano!" },
    {email:"bossvald@live.com", fecha:"19/07/2022 15:08", mensaje:"Con que?" },
    {email:"basilio.ossvald@gmail.com", fecha:"19/07/2022 15:10", mensaje:"Tengo un problema de logueo" },
    {email:"bossvald@live.com", fecha:"19/07/2022 15:15", mensaje:"Dentro de la plataforma?" },
    {email:"basilio.ossvald@gmail.com", fecha:"19/07/2022 15:20", mensaje:"Sisi! y puse bien el usuario y contraseña!" },
    {email:"bossvald@live.com", fecha:"19/07/2022 15:30", mensaje:"Necesitas que te la restee?" },
    {email:"basilio.ossvald@gmail.com", fecha:"19/07/2022 15:45", mensaje:"si por favor!" },
    {email:"bossvald@live.com", fecha:"19/07/2022 15:59", mensaje:"Listo!" },
]

db.mensajes.insertMany(mensajes)

/* PRODUCTOS - title,thumbnail,price */
//3.Definir las claves de los documentos en relación a los campos de las tablas de esa base. En el caso de los productos, poner valores al campo precio entre los 100 y 5000 pesos(eligiendo valores intermedios, ej: 120, 580, 900, 1280, 1700, 2300, 2860, 3350, 4320, 4990). 
const productos = [
    {title:"Comen 2 Pican 3 Clasica", thumbnail:"https://www.res.com.ar/media/catalog/product/cache/dbcd7fcd96d4e43f69e3e3703d135006/p/i/picada-grande.jpg", price:120 },
    {title:"Comen 4 Pican 6 Clasica", thumbnail:"https://www.res.com.ar/media/catalog/product/cache/dbcd7fcd96d4e43f69e3e3703d135006/p/i/picada-grande.jpg", price:580 },
    {title:"Comen 6 Pican 8 Clasica", thumbnail:"https://www.res.com.ar/media/catalog/product/cache/dbcd7fcd96d4e43f69e3e3703d135006/p/i/picada-grande.jpg", price:900 },
    {title:"Comen 8 Pican 10 Clasica", thumbnail:"https://www.res.com.ar/media/catalog/product/cache/dbcd7fcd96d4e43f69e3e3703d135006/p/i/picada-grande.jpg", price:1280 },
    {title:"Comen 2 Pican 3 Premium", thumbnail:"https://www.res.com.ar/media/catalog/product/cache/dbcd7fcd96d4e43f69e3e3703d135006/p/i/picada-grande.jpg", price:1700 },
    {title:"Comen 4 Pican 6 Premium", thumbnail:"https://www.res.com.ar/media/catalog/product/cache/dbcd7fcd96d4e43f69e3e3703d135006/p/i/picada-grande.jpg", price:2300 },
    {title:"Comen 6 Pican 8 Premium", thumbnail:"https://www.res.com.ar/media/catalog/product/cache/dbcd7fcd96d4e43f69e3e3703d135006/p/i/picada-grande.jpg", price:2860 },
    {title:"Comen 8 Pican 10 Premium", thumbnail:"https://www.res.com.ar/media/catalog/product/cache/dbcd7fcd96d4e43f69e3e3703d135006/p/i/picada-grande.jpg", price:3350 },
    {title:"Comen 2 Pican 3 Vegetariana", thumbnail:"https://www.res.com.ar/media/catalog/product/cache/dbcd7fcd96d4e43f69e3e3703d135006/p/i/picada-grande.jpg", price:4320 },
    {title:"Comen 4 Pican 6 Vegetariana", thumbnail:"https://www.res.com.ar/media/catalog/product/cache/dbcd7fcd96d4e43f69e3e3703d135006/p/i/picada-grande.jpg", price:4990 },
]

db.productos.insertMany(productos)
db.productos.drop()
//4.Listar todos los documentos en cada colección.
db.mensajes.find().pretty()
db.productos.find().pretty()

//5.Mostrar la cantidad de documentos almacenados en cada una de ellas.
db.mensajes.estimatedDocumentCount()
db.productos.estimatedDocumentCount()


/* 6.Realizar un CRUD sobre la colección de productos:
Agregar un producto más en la colección de productos 
Realizar una consulta por nombre de producto específico:*/
//A - Listar los productos con precio menor a 1000 pesos.
db.productos.find({price:{$lt:1000}}).pretty()
//B - Listar los productos con precio entre los 1000 a 3000 pesos.
db.productos.find({$and:[{price:{$lte:3000}},{price:{$gte:1000}}]}).pretty()
//C - Listar los productos con precio mayor a 3000 pesos.
db.productos.find({price:{$gt:3000}}).pretty()
//D - Realizar una consulta que traiga sólo el nombre del tercer producto más barato.
db.productos.find({},{title:1,_id:0}).sort({price:1}).skip(2).limit(1).pretty()
//E - Hacer una actualización sobre todos los productos, agregando el campo stock a todos ellos con un valor de 100.
db.productos.updateMany({},{$set:{stock:100}})
//F - Cambiar el stock a cero de los productos con precios mayores a 4000 pesos. 
db.productos.updateMany({price:{$gt:4000}},{$set:{stock:0}})
//G - Borrar los productos con precio menor a 1000 pesos  
db.productos.remove({price:{$lt:1000}})
//7.Crear un usuario 'pepe' clave: 'asd456' que sólo pueda leer la base de datos ecommerce. Verificar que pepe no pueda cambiar la información.
db.createUser({
    user:"pepe",
    pwd:'asd456',
    roles:[
        {role:"read", db: "ecommerce"}
    ]
})
//mongod -auth --dbpath ./base
//mongo -u pepe -p asd456