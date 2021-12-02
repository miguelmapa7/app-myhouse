//requiero el modelo
const User = require("../modells/user");
//trabajo con el jwt
const jwt = require("jsonwebtoken");

class UserController {
    //procesa  peticion http- dirigen peticion del cliente hacia el contolador
    register(req, res) {
            let objUser = req.body;
            if (objUser.name && objUser.lastname && objUser.email && objUser.password) {
                //Creo el usuario en la DB
                // creeleo parametro 1
                User.create(objUser, (error, doc) => {
                    if (error) {
                        res.status(500).json({ info: error });
                    } else {
                        //construllo el Token
                        console.log(doc);
                        let token = jwt.sign({ id: doc._id }, process.env.JWT_PRIVATE_KEY);
                        res.status(201).json({ token });
                        //  res.status(201).json({ info: "Usuario Creado" });
                    }
                });
            } else {
                res.status(400).json({ info: "Datos Incompletos" });
            }
        }
        //decodificar token
        // decode(req, res) {
        //     let { token } = req.body;
        //     let info = jwt.decode(token, "EstaEsM1P4l4br4Cl4V3")
        //     console.log(info);
        //     res.status(200).json({ info })

    // }

    //creo el login- hay que crear una ruta al metodo login donde creo un token si el esuario existe
    login(req, res) {
        let { email, password } = req.body;
        User.findOne({ email, password }, (error, doc) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                console.log(doc);
                if (doc != null && doc != undefined) {
                    let token = jwt.sign({ id: doc._id }, process.env.JWT_PRIVATE_KEY);
                    console.log("jhon");
                    res.status(200).json({ token });
                } else {
                    res.status(401).json({ info: "Credenciales Invalidas" });
                }
            }
        });
    }
}
module.exports = UserController;