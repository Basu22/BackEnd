import mongoose from "mongoose";
import User from "./models/user.js";

const main = async ()=>{
    //conexion a la db
    const URL = 'mongodb://localhost:27017/picateesta'
    await mongoose.connect(URL)
    console.log('Conexion satisfactoria a la base de datos!')

    //INSERTAR UN SOLO REGISTRO
    const user = { nombre: "Juana", apellido: "Martinez", email:"jm@gmail.com", usuario: " juana", password: "123"}
    const juanaModel = new User(user)
    await juanaModel.save()
    

    //INSERTAR VARIOS REGISTROS
    const users = [
        {nombre: "Basilio", apellido: "Ossvald", email:"bo@gmail.com", usuario: "baso", password: "123"},
        {nombre: "Julieta", apellido: "Mendonca", email:"jum@gmail.com", usuario: "july", password: "123"}
    ]
    User.insertMany(users)
    console.log("Usuarios almacenados!")

    //FILTRAR BUSQUEDA USUARIO
    const usuariosFiltrados = await User.find({$and:[{apellido:'Ossvald'}, {password:{$gte:'123'}}]},{__v:0,_id:0})
    console.log(usuariosFiltrados)

    //BUSCAR USUARIO POR ID
    const oneUser = await User.findById('62dc5f1fea16f466d7e2dd55')
    console.log(oneUser)

    //UPDATEAR USUARIO
    const updateUser = await User.updateOne({nombre:"Basilio"},{$set:{password:"2917euro"}})
    console.log(updateUser)

    //BORRAR USUARIO
    await User.deleteOne({nombre:"Juana"})
    const Usuarios = await User.find()
    console.log(Usuarios)

}

main()