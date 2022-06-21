const routerController = (req,res)=>{
    try{
        res.render('main.pug',{titulo:'Hola Bienvenido', nombre:'Basilio', apellido:'Ossvald'})
    }catch(e){
        console.log('Error:',e)
        res.sendStatus(500)
    }
}

module.exports = { routerController  }