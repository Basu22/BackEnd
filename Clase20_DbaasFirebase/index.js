import mongoose from "mongoose";
import User from "./models/user.js";


const main = async()=> {
    await mongoose.connect('mongodb+srv://baso:2917Eur0@cluster0.ffmgoom.mongodb.net/test?retryWrites=true&w=majority')

    console.log('Conexión establecida')

    const users = await User.find()
    
    console.log(users)

}

main()