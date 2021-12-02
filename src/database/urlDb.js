//creo la conexion de la ruta de la base
const user = process.env.NODE_USER;
const pass = process.env.NODE_PASS;
const database = "Domarcas";

module.exports = {
    cloud_db: `mongodb+srv://${user}:${pass}@mintic2022.bwgim.mongodb.net/${database}`,
    local_db: `mongodb://27017/nombre_base`
}
