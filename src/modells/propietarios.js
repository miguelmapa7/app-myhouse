//Esquema a Modelo
//import moongose from "mongoose";
//const { Schema, model } = require("mongoose");

//const Schema = moongose.Schema;
const { Schema, model } = require("mongoose");

//creo el Schema
const propietarioSchema = Schema(
  {
    nombre: { type: String, required: [true, "Nombre Obligatorio"] },
    // si no es requeried no necesita typado  solo el tipo de dato
    apellidos: { type: String, required: [true, "Apellidos Obligatorio"] },
    usuarioID: String,
    cedula: { type: String, required: [true, "Cedula Obligatorio"] },
    ciudad: String,
    telefono: String,
    email: String,
    casa: String,
    apartamento: String,
    tipo: {
      type: String,
      required: [true, "Propietario-arrendatario-Temporal"],
    },
    tmascota: String,
    date: { type: Date, default: Date.now },
    activo: { type: Boolean, default: true },
  },
  { collection: "PropietariosArr" }
);
module.exports = model("Propietario", propietarioSchema);
