import dotenv from 'dotenv'
dotenv.config()
import { databaseMaria } from '../db/SQLconnect.js'
import Articulos from '../class/articulos.js'
import { faker } from '@faker-js/faker'

const data = new Articulos(databaseMaria,process.env.TABLA_ARTICULOS)

const getProductosTest = async (req,res)=>{
        let productos = []
        for (let index = 0; index < 5; index++) {
                productos = [...productos,{
                        title:faker.commerce.product(),
                        thumbnail:faker.image.image(),
                        price:faker.commerce.price()
                }]
        }
        res.render('main_test.ejs',{productos})
}

export { getProductosTest }