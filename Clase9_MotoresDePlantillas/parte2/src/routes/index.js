const { Router } = require('express')
const router = Router()

router.get('/cte1',(req,res)=>{
    res.render('plantilla1',{title:'Mensaje importante', message:'Importante', autor:'Pepe', version:'1.0.0'})
})

router.get('/cte2',(req,res)=>{
    res.render('plantilla2',{nombre:'Basilio', apellido:'Ossvald', fechaYhora: Date()})
})

module.exports = router