const routerController = (req,res)=>{

    try{
        res.render('main.pug',req.query)
    }catch(e){
        console.log('Error:',e)
        res.sendStatus(500)
    }
}

module.exports = { routerController }