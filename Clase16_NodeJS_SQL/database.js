const knex = require('knex')

const config = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'picate_esta'
    },
    pool: { min: 0, max: 7 }
}

const configSQlite3 = {
    client: 'sqlite3',
    connection: {filename: './db/mydb.sqlite'}, 
    useNullasDefault:true
}


const databaseConnection = knex(configSQlite3) 

module.exports= databaseConnection