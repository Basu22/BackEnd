const database = require('./database')

const updateCars = async() =>{
    try{
        /* updatear un registro */
        await database.from('cars').where("id","=","1").update({ price: 500 })
        console.log("car updated!")
        database.destroy()
    }catch(e){
        console.log(e)
        database.destroy()
    }
}


updateCars()