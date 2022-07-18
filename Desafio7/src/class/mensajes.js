const {crearTablaLite} = require('../scripts/crearTabla')

class Mensajes {
    constructor(conexion,tabla) {
        this.conexion = conexion
        this.tabla = tabla
    }

    async save(objeto) {
        await this.conexion(this.tabla).insert(objeto)
    }

    async getAll() {
        try{
            const data = await this.conexion.from(this.tabla).select('*')
            if (data){
                return data
            }else{
                crearTablaLite(this.tabla)
            }
        }catch(e){
            if (e.errno === 1){
                crearTablaLite(this.tabla)
            }else{
                console.log(e)
            }
        }
    }
}

module.exports =  Mensajes 