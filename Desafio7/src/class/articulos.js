const {crearTablaMaria} = require('../scripts/crearTabla')

class Articulos {
    constructor(conexion,tabla) {
        this.conexion = conexion
        this.tabla = tabla
    }

    async save(objeto) {
        try{
            await this.conexion(this.tabla).insert(objeto)
        }catch(e){
            console.log(e)
        }
    }

    async getAll() {
        try{
            const data = await this.conexion.from(this.tabla).select('*')
            console.log('desde articulos.js',data)
            return data
        }catch(e){
            if (e.code === 'ER_NO_SUCH_TABLE'){
                crearTablaMaria(this.tabla)
            }else{
                console.log(e)
            }
        }
    }
}

module.exports = Articulos