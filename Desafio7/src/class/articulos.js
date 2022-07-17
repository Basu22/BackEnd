const crearTablaArticulos = require('../scripts/crearBase')

class Articulos {
    constructor(conexion,tabla) {
        this.conexion = conexion;
        this.tabla = tabla
    }

    async save(objeto) {
        const conexion = this.conexion
        await (this.conexion)(this.tabla).insert(objeto)
    }

    async getAll() {
        try{
            const data = await (this.conexion).from(this.tabla).select('*')
            if (data){
                return data
            }else{
                crearTablaArticulos()
            }
        }catch(e){
            if (e.code === 'ER_NO_SUCH_TABLE'){
                crearTablaArticulos()
            }
        }
    }
}

module.exports = { Articulos }