const databaseConnection = require('./connect')
const connect = require('./connect')

const crearTablaArticulos = async()=>{
    try{
        await connect.schema.createTable('articulos', articulosTabla=>{
            articulosTabla.string('nombre',15).notNullable()
            articulosTabla.string('codigo',10).notNullable()
            articulosTabla.float('precio')
            articulosTabla.integer('stock')
            articulosTabla.increments('id').primary().notNullable()
        })
        console.log('Base Creada!')
        connect.destroy()
    }catch(e){
        console.log(e)
        connect.destroy()
    }
}

const insertarArticulos = async()=>{
    try{
        const articulos = [
            {nombre:"Comen 2 Pican 3 Clasica", codigo:"C2P3C", precio:1500, stock:20},
            {nombre:"Comen 4 Pican 6 Clasica", codigo:"C4P6C", precio:2500, stock:12},
            {nombre:"Comen 8 Pican 10 Clasica", codigo:"C8P10C", precio:3500, stock:15},
            {nombre:"Comen 2 Pican 3 Premium", codigo:"C2P3P", precio:4500, stock:2},
            {nombre:"Comen 4 Pican 6 Premium", codigo:"C4P6P", precio:6500, stock:8},
            {nombre:"Comen 8 Pican 10 Premium", codigo:"C8P10P", precio:8500, stock:10}
        ]
        console.log('Articulos Insertados!')
        await connect('articulos').insert(articulos)
        connect.destroy()
    }catch(e){
        console.log(e)
        connect.destroy()
    }

}

const mostrarArticulos = async()=>{
    try{
        const articulos = await connect.from('articulos').select('*')
        articulos.map(articulo=>{console.log(`
        ID: ${articulo.id}
        Nombre: ${articulo.nombre}
        Codigo: ${articulo.codigo}
        Precio: ${articulo.precio}
        Stock:  ${articulo.stock}
        `)})
        console.log('Base Consultada!')
        connect.destroy()
    }catch(e){
        console.log(e)
        connect.destroy()
    }
}

const borrarArticulo = async(id)=>{
    try{
        await connect.from('articulos').where('id','=',id).del()
        console.log('Articulo Borrado!')
        connect.destroy()
    }catch(e){
        console.log(e)
        connect.destroy()
    }
    
}

const actualizarArticulo = async(id)=>{
    try{
        await connect.from('articulos').where('id','=',id).update({ stock:0 })
        console.log('Articulo Actualizado!')
        connect.destroy()
    }catch(e){
        console.log(e)
        connect.destroy()
    }
}


crearTablaArticulos()
insertarArticulos()
mostrarArticulos()
borrarArticulo(3)
actualizarArticulo(2)

