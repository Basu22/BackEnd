import { Router } from "express";
import rutasProductos from './routerProductos.js'
import { loginControl, validarLogin, desloguear, failLogin } from "../controllers/controllersLogin.js";
import { failSingup, singUp } from "../controllers/controllersSingup.js";
import passport from "passport";
const rutas = Router()

rutas.use('/api',rutasProductos)

rutas
    .route('/')
    .get(loginControl)
    .post(passport.authenticate('login',{ failureRedirect: "/failLogin" }), validarLogin)

rutas
    .route('/desloguear')
    .get(desloguear)

rutas
    .route('/registrarse')
    .get(singUp)
    .post(passport.authenticate('register',{ failureRedirect: '/failSingup' }),loginControl)

rutas
    .route('/failLogin')
    .get(failLogin)

rutas
    .route('/failSingup')
    .get(failSingup)

export default rutas