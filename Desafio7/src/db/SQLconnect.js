require('dotenv').config()
const knex = require('knex')

const configMaria = {
    client: 'mysql',
    connection: {
        host: process.env.HOST,
        user: process.env.USER,
        password:process.env.PASS,
        database: process.env.DB
    },pool: { min: 0, max: 7 }
}

const configLite = {
    client: 'sqlite3',
    connection: { filename:'./src/db/mydb.sqlite' },
    useNullAsDefault:true
}

const databaseMaria = knex(configMaria)
const databaseLite = knex(configLite) 

module.exports= {databaseMaria,databaseLite}