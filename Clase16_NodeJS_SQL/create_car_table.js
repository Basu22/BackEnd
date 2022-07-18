const database = require('./database')

const createCarTable = async ()=>{
    try{
        /* En el caso de que exista la borra */
        await database.schema.dropTableIfExists('cars')
        /* crea la base de datos */
        await database.schema.createTable('cars', carTable =>{
            carTable.increments('id').primary()
            carTable.string('brand', 50).notNullable()
            carTable.string('model', 50).notNullable()
            carTable.integer('year').notNullable()
            carTable.integer('price').notNullable()
        })
        console.log('carTable Created!')
        database.destroy()
    }catch(e){
        console.log(e)
        database.destroy()
    }
}

createCarTable()