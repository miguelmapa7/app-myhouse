//conectar a base
const mongoose = require("mongoose");
const { cloud_db } = require("./urlDb");

//creo la clase
class ConnDb {
    constructor() {
            //llamo el metodo asincrono
            this.connection()
        }
        //genero Metodo la conexion para que cada que use el ConnDb genere la conexion
    connection() {
        mongoose.connect(cloud_db).then(resp => {
            // console.log(resp);
        }).catch(err => {
            console.log(err);
        });
    }
}

module.exports = ConnDb;