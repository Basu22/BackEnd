const { Router } = require('express')
const router = Router() 
const rutasUser = require('./rutasUser')

router.get('/',(req,res)=>{
    res.send('Estas en /API')
})

router.get('/home',(req,res)=>{
    res.send('Estas en home')
})

router.use('/user',rutasUser)

module.exports = router