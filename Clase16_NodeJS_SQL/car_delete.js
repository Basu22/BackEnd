const database = require('./database')

const deleteCars = async() =>{
    try{
        await database.from('cars').where('id','=','10').del()
        console.log("car deleted!")
        database.destroy()
    }catch(e){
        console.log(e)
        database.destroy()
    }
}


deleteCars()