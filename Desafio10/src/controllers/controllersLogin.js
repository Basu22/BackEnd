const loginControl = (req,res)=>{
    res.render('login.ejs')
}

const validarLogin = (req,res)=>{
    req.session.username = req.body.username
    console.log(req.session.username)
    res.redirect('/api/productos')
}

const desloguear = (req, res)=>{
    req.session.destroy(err=>{
        if (!err){
            res.clearCookie("username")         
            res.redirect('/')
        }else{
            res.json({error:err})
        }
    })
}

export {loginControl, validarLogin, desloguear}