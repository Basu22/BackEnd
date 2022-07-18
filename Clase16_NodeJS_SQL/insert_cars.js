const database = require('./database')

const insertCars = async()=>{
    try{
        /* armamos el objeto para insertar en la base de datos */
        const cars = [
            { brand:"Volkswagen", model:"Gol", year:2015, price: 1000},
            { brand:"Volkswagen", model:"Gol Trend", year:2019, price: 1500},
            { brand:"Toyota", model:"Corolla", year:2020, price: 5000},
            { brand:"Fordt", model:"Super GT", year:2005, price: 10000},
            { brand:"Lamborghini", model:"Gallardo", year:2020, price: 100000}
        ]
        /* insertamos en la base de datos */
        await database('cars').insert(cars)

        console.log('Cars inserted!')
        
        database.destroy()
    }catch(e){
        console.log(e)

        database.destroy()
    }
}

insertCars()