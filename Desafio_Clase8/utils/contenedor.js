const { json } = require("express");
const fs = require("fs");
const encoding = "utf-8"

class Contenedor {
    constructor(path) {
        this.filePath = path;
        this.createFileIfNotExists();
        const data = fs.readFileSync(this.filePath, encoding);
        this.contenedor = JSON.parse(data);
    }

    createFileIfNotExists() {
        if (!fs.existsSync(this.filePath)) {
            fs.writeFileSync(this.filePath, "[]");
        }
    }

    _saveAll (data) {
        const stringData = JSON.stringify(data, null, 2);
        fs.writeFileSync(this.filePath, stringData, encoding)
    }

    save(object) {
        const lastID = this.contenedor.reduce(
            (acc, el) => {
                return el.id > acc ? el.id : acc
            },
            0
        );
        const newID = lastID + 1;
        object.id = newID;
        this.contenedor.push(object);
        this._saveAll(this.contenedor)
        return newID;
    }

    getByID (id) {
        return this.contenedor.find(c => c.id === id);
    }

    getAll () {
        return this.contenedor;
    }

    deleteByID(id) {
        const filtered = this.contenedor.filter(el => el.id !== id);
        this.contenedor = filtered;
        this._saveAll(filtered);
    }

    deleteAll () {
        this.contenedor = [];
        this._saveAll([]);
    }
}

module.exports = Contenedor
