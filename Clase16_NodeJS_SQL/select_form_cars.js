const database = require('./database')

const selectCars = async() =>{
    try{
        const carsFromDatabase = await database.from('cars').select('*')
        carsFromDatabase.forEach(cars=>{
            console.log(`
                Marca:  ${cars.brand}
                Modelo: ${cars.model}
                Año:    ${cars.year}
                Precio: ${cars.price}
            `)}
        )
        database.destroy()
    }catch(e){
        console.log(e)
        database.destroy()
    }
}


selectCars()