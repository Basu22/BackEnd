const controlRuta = (req,res)=>{
    res.json({ error : -2, descripcion: `ruta ${req.baseUrl} método ${req.method} no implementada`})
}

module.exports={controlRuta}