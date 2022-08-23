import { Router } from "express";
import rutasProductos from './routerProductos.js'
import { loginControl, validarLogin, desloguear } from "../controllers/controllersLogin.js";
import { singupControl } from "../controllers/controllersSingup.js";
import passport from "passport";
const rutas = Router()

rutas.use('/api',rutasProductos)

rutas
    .route('/')
    .get(loginControl)
    .post(passport.authenticate('login'), validarLogin)

rutas
    .route('/desloguear')
    .get(desloguear)

rutas
    .route('/registrarse')
    .get(singupControl)


export default rutas