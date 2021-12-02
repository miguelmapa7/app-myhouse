const { Router } = require("express");
const UserController = require("../controllers/userController");


class UserRouter {
    constructor() {
            //Crear objeto tipo Router  y asignarlo como atributo de la clase
            this.router = Router();
            //Configurar las Rutas
            this.config();
        }
        //metodo de configuracion para redirigir al controlador

    config() {
        const objUserC = new UserController();
        //creo las rutas
        this.router.post("/user", objUserC.register);
        //this.router.post("/user", objUserC.decode);
        //ruta para el token
        this.router.post("/user/auth", objUserC.login)
            //ruta de prodcuto



    }
}
module.exports = UserRouter;