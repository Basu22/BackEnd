const {databaseLite} = require('../db/SQLconnect')
const {databaseMaria} = require('../db/SQLconnect')

const crearTablaMaria = async (tabla)=>{
    try{
        /* crea la base de datos */
        await databaseMaria.schema.createTable(tabla, table =>{
            table.increments('id').primary()
            table.string('title', 50).notNullable()
            table.string('thumbnail', 50).notNullable()
            table.integer('price').notNullable()
        })
        console.log(`tabla ${tabla} creada!`)
    }catch(e){
            console.log(e)
        }
}

const crearTablaLite = async (tabla)=>{
    try{
        /* crea la base de datos */
        await databaseLite.schema.createTable(tabla, table =>{
            table.increments('id').primary()
            table.string('email', 50).notNullable()
            table.timestamp('fecha',{useTz:true}).notNullable()
            table.string('mensaje', 256).notNullable()
        })
        console.log(`tabla ${tabla} creada!`)
    }catch(e){
            console.log(e)
        }
}

module.exports = {crearTablaMaria, crearTablaLite}