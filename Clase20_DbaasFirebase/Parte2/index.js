import admin from "firebase-admin"
import serviceAccount from './keyJson.json' assert {type:"json"}

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const main = async()=>{
    const db = admin.firestore()
    const User = db.collection('users')

    //CREATE
    try{
        const newUser = User.doc()
        await newUser.create({nombre:'Basilio', apellido:'Ossvald'})

        const newUser2 = User.doc()
        await newUser2.create({nombre:'Julieta', apellido:'Mendonca'})
        
    }catch(e){
        console.log(e)
    }

    try{
        
    }catch(e){
        console.log(e)
    }

    try{
        
    }catch(e){
        console.log(e)
    }

    try{
        
    }catch(e){
        console.log(e)
    }

}