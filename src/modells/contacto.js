//Esquema a Modelo

const { Schema, model } = require("mongoose");

//creo el Schema
const contactoSchema = Schema(
  {
    nombre: { type: String, required: [true, "Nombre Obligatorio"] },
    // si no es requeried no necesita typado  solo el tipo de dato
    apellidos: { type: String, required: [true, "Apellidos Obligatorio"] },
    correo: { type: String, required: [true, "Cedula Obligatoriop"] },
    mensaje: { type: String, required: [true, "parentesco Obligatorio"] },
    date: { type: Date, default: Date.now },
  },
  { collection: "Contacto" }
);

//Ahora lo combierto a MODELO para luego utilizarllo en
//las rutas
//seguido lo exporto
//const gFamiliarModel = moongose.model("GrupoFamiliar", gFamiliarSchema);
//export default gFamiliarModel;
module.exports = model("Contacto", contactoSchema);
