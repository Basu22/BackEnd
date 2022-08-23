import { Router } from "express";
import rutasProductos from './routerProductos.js'
import { loginControl, validarLogin, desloguear } from "../controllers/controllersLogin.js";
import { loginStrategy } from "../login/authStrategy.js";
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

export default rutas