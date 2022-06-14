const { Router } = require('express')
const router = Router() 

router.get('/',(req,res)=>{
    res.send('Estas en /user')
})

router.get('/:id',(req,res)=>{
    res.send(`Estas en /user/${id}`)
})

module.exports = router