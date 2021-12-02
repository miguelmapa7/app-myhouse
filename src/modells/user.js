//Creo los modelos se crea basdo en el - esquemas de mongose
const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
//recibe dos objetos - 1. modelo 2. coleccion
const userSchema = Schema(
  {
    name: {
      type: String,
    },
    lastname: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  {
    collection: "user",
  }
);
userSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    console.log(this.password);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    console.log(this.password);
  } catch (error) {
    next(error);
  }
});

module.exports = model("User", userSchema);
