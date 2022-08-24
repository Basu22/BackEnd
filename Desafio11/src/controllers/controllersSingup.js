import { registerStrategy } from "../login/authStrategy.js"

const singUp = (req,res)=>{
    res.render('registrer.ejs')
}

const singupControl = (req,res)=>{
    registerStrategy
}

const failSingup = (req,res)=>{
    let login = false
    res.render('failAuth.ejs',{login})
}

export { singupControl, singUp, failSingup }