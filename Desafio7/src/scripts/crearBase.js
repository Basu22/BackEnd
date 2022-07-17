const databaseConnection = require('../db/SQLconnect')


const crearTablaArticulos = async ()=>{
    try{
        /* crea la base de datos */
        await databaseConnection.schema.createTable('articulos', articulo =>{
            articulo.increments('id').primary()
            articulo.string('title', 50).notNullable()
            articulo.string('thumbnail', 50).notNullable()
            articulo.integer('price').notNullable()
        })
        console.log('tabla articulos creada!')
        databaseConnection.destroy()
    }catch(e){
        if (e.code ==='ER_TABLE_EXISTS_ERROR'){
            databaseConnection.destroy()
        }else{
            console.log(e)
        }
    }
}

module.exports = crearTablaArticulos