const personas = []

const obtenerPersonas = (req,res)=>{
    try{
        res.render('main.ejs', { personas })
    }catch(err){
        console.log(err.message)
    }
}

const crearPersonas = (req, res)=>{
    personas.push(req.body)
    res.redirect('/personas')
}


module.exports = { crearPersonas, obtenerPersonas }