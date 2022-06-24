const routerController = (req,res)=>{
    console.log(req.query)
    try{
        res.render('main.ejs',req.query)
    }catch(e){
        console.log('Error:',e)
        res.sendStatus(500)
    }
}

module.exports = { routerController }