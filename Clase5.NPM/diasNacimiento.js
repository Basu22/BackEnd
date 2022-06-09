const moment = require("moment")

const fechaNacimiento = moment("16091982","DDMMYYYY")
const fechaHoy = moment()

const aniosPasados = fechaHoy.diff(fechaNacimiento,"years")
const diasPasados = fechaHoy.diff(fechaNacimiento,"days")

console.log(`Hoy es ${fechaHoy.format("DD/MM/YYYY")}`)
console.log(`Nací el ${fechaNacimiento.format("DD/MM/YYYY")}`)
console.log(`Desde mi nacimiento han pasado ${aniosPasados} años`)
console.log(`Desde mi nacimiento han pasado ${diasPasados} dias`)