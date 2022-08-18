import { Router } from "express";
import rutasProductos from './routerProductos.js'
import { loginControl, validarLogin, desloguear } from "../controllers/controllersLogin.js";
const rutas = Router()

rutas.use('/api',rutasProductos)

rutas
    .route('/')
    .get(loginControl)
    .post(validarLogin)

rutas
    .route('/desloguear')
    .get(desloguear)

export default rutas