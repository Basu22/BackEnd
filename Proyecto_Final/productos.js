const fs = require ('fs')
            
class Contenedor {
    constructor(filename) {
        this.filename = filename;
    }

    async save(objeto) {
        let data = await fs.promises.readFile(`./${this.filename}`, "utf-8")
        if (!data) {
            objeto.id = 1;
            const arr = [objeto];
            await fs.promises.writeFile(`./${this.filename}`, JSON.stringify(arr));
            return objeto.id;
        } else {
            data = JSON.parse(data);
            objeto.id = data.length + 1;
            data.push(objeto);
            await fs.promises.writeFile(`./${this.filename}`, JSON.stringify(data));
            return objeto.id;
        }
    }

    async getAll() {
        let data = await fs.promises.readFile(`./${this.filename}`, "utf-8");
        if (!data) {
            return data;
        } else {
            data = JSON.parse(data);
            return data;
        }
    }
}

module.exports = { Contenedor }