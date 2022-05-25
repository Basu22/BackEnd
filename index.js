/* 1. SE DECLARA LA CLASE USUARIO */
class Usuario {
    /* 2. SE CREA EL CONSTRUCTOR PARA CONTAR CON LOS SIGUIENTES ATRIBUTOS */
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre,
        this.apellido = apellido,
        this.libros = libros
        this.mascotas = mascotas
    }

    /* 3. SE CREAN LOS SIGUIENTES METODOS */
    getFullName(){
        console.log(`El nombre completo de la persona es ${this.nombre} ${this.apellido}`)
    }

    addMascota(mascota){
        this.mascotas.push(mascota)
    }

    countMascota(){
        console.log(`La cantidad de mascotas que tiene es ${this.mascotas.length}`)
    }

    addBoook(nombre, autor){
        this.libros = [...this.libros,{nombre,autor}]
    }

    getBookNames(){
        console.log(this.libros.map(libro=>libro.nombre))
    }
}

/* CREAR UN OBJETO LLAMADO USUARIO CON VALORES ARBITRARIOS E INVOCAR TODOS SUS METODOS */

const BasilioOssvald = new Usuario ("Basilio","Ossvald",[{"nombre":"Angeles y Demonios", "autor":"Dan Brown"}],["Euro", "Dolar", "Libra"])
/* Devolver nombre completo */
BasilioOssvald.getFullName()
/* Añadir mascota */
BasilioOssvald.addMascota("Niza")
/* Devolver cantidad de mascotas */
BasilioOssvald.countMascota()
/* Agregar libro al listado */
BasilioOssvald.addBoook("El Principito", "Antoine de Saint-Exupéry")
/* Mostrar nombre de Libros */
BasilioOssvald.getBookNames()
/* FINAL */