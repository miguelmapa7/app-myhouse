//const Product = require("../modells/product");
const jwt = require("jsonwebtoken");
const TokenControler = require("./tokenController");
const gfamiliar = require("../modells/gfamiliar");

class gFamiliarController {
  //creo el contructoy el atributo token
  constructor() {
    this.tokenC = new TokenControler();
  }

  //metodo para crear porducto- se traja como funcion
  create = (req, res) => {
    //capturar datos del cuerpo de la peticion- ver que usuario sube producto
    let { nombre, apellidos, cedula, parentesco, propietario } = req.body;
    //obtengo el token
    let token = this.tokenC.getToken(req);
    //let objProduct = req.body;
    //obtener datos del token- split parte la cadena dinde hay un espacio-array
    console.log(req.headers.authorization);

    let decode = jwt.decode(token, process.env.JWT_PRIVATE_TOKEN);
    console.log(decode);
    //despues de capturado el token - creo el producto
    gfamiliar.create(
      //{ name, price, url_img, user_id: decode.id },
      {
        nombre,
        apellidos,
        cedula,
        parentesco,
        propietario,
        user_id: decode.id,
      },
      (error, doc) => {
        if (error) {
          res.status(500).json({ error });
        } else {
          res.status(201).json({ info: "Familiar Creado" });
        }
      }
    );
  };
  //actauliazar -- solo lo puede modificar el usuario que lo creo
  update = (req, res) => {
    let _id = req.params.id;
    //capturo el id del producto
    //let { id, name, price, url_img } = req.body;
    let { nombre, apellidos, cedula, parentesco, propietario } = req.body;
    //obtengo el token
    let token = this.tokenC.getToken(req);
    //console.log("jhon", token);
    //decodifico el token
    let decode = jwt.decode(token, process.env.JWT_PRIVATE_TOKEN);
    //capturo el id de usuario
    //let user_id = decode.id;
    //busco por id del producto y por id de usuario para actualizar la inf
    gfamiliar.findOneAndUpdate(
      { _id },
      {
        nombre,
        apellidos,
        cedula,
        parentesco,
        propietario,
      },
      //{ _id: id, user_id },
      //{ name, price },
      (error, doc) => {
        //evaluo el error
        if (error) {
          res.status(500).json({ error });
        } else {
          res.status(200).json({ info: "Familiar Actualizado" });
        }
      }
    );
  };

  //get de productos por usuario
  getByUser = (req, res) => {
    //obtengo los id del usuario por medio del token
    //obtengo el token
    let user_id = req.params.id;
    let token = this.tokenC.getToken(req);
    //decodifico el token
    let decode = jwt.decode(token);
    //capturo el id de usuario
    console.log("pppp", user_id);
    //obtener productos creados por el usuario
    gfamiliar.findOne({ _id: user_id }, (error, docs) => {
      if (error) {
        res.status(500).json({ error });
      } else {
        res.status(200).json(docs);
      }
    });
  };
  //Metodo Delete
  delete = (req, res) => {
    //capturo el id del producto
    let _id = req.params.id;
    //obtengo el token
    let token = this.tokenC.getToken(req);
    console.log("jhon", token);
    //decodifico el token
    let decode = jwt.decode(token, process.env.JWT_PRIVATE_TOKEN);
    //capturo el id de usuario
    //let user_id = decode.id;
    //eleimino el producto
    gfamiliar.findOneAndDelete({ _id }, (error, docs) => {
      if (error) {
        res.status(500).json({ error });
      } else {
        res.status(200).json({ info: "Familiar Eliminado" });
      }
    });
  };
  // get All
  getAll = (req, res) => {
    gfamiliar.find((error, docs) => {
      if (error) {
        res.status(500).json({ error });
      } else {
        res.status(200).json(docs);
      }
    });
  };
}
module.exports = gFamiliarController;
