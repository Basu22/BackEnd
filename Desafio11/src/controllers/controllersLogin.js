import passport from "passport"
import passport_local from "passport-local"
const LocalStrategy = passport_local.Strategy

const loginControl = (req,res)=>{
    res.render('login.ejs')
}

const validarLogin = (req,res)=>{
    req.session.username = req.body.username
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