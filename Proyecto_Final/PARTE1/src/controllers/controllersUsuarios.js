const admin = false

function controlUsuario(req,res,next){
    if(!admin){
        res.json( { error : -1, descripcion: `ruta ${req.baseUrl} método ${req.method} no autorizada` } )
    }else{
        next()
    }
}

module.exports = {controlUsuario}


