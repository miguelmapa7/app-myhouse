//Creo los modelos se crea basdo en el - esquemas de mongose
const { Schema, model } = require("mongoose");

const productSchema = Schema({
        name: {
            type: String,
        },
        price: {
            type: Number,
        },
        user_id: {
            type: String,
        },
        url_img: {
            type: String
        }
    },

    {
        collection: "products",
    }
);

module.exports = model("Products", productSchema);