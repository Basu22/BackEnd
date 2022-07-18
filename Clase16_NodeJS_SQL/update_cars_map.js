const database = require('./database')

const updateCars = async() =>{
    try{
        const carsFromDatabase = await database.from('cars').select('price','id')

        /* updatear un registro */
        await Promise.all( carsFromDatabase.map(async car=>{
            await database.from('cars').where("id","=",car.id).update({ price: (car.price / 2) })
            })
        )
        console.log("car updated!")
        database.destroy()
    }catch(e){
        console.log(e)
        database.destroy()
    }
}


updateCars()