const { Router } = require("express");
const propietarioController = require("../controllers/propietarioController");
const TokenController = require("../controllers/tokenController");

class propietarioRouter {
  constructor() {
    this.router = Router();
    this.#config();
  }
  //#- crea ruta privada #config() y el this.#copnfig()

  #config() {
    let tokenC = new TokenController();
    //contruir objeto
    const propietarioC = new propietarioController();
    //configuro rutas
    //ruta getAll-Publica
    this.router.get("/propietario", propietarioC.getAll);

    //-------------------PONGO RUTAS PRIVADAS MIDELLWARE------
    //SE EJECUTA EN ORDEN DE UBICAXION- next es para que siga si cumple
    this.router.use(tokenC.verifyAuth);
    //ruta crear Privada
    this.router.post("/propietario", propietarioC.create);
    //ruta de update
    this.router.put("/propietario/:id", propietarioC.update);
    //rutas del get
    this.router.get("/propietario/:id", propietarioC.getByUser);
    //ruta delete
    this.router.delete("/propietario/:id", propietarioC.delete);
  }
}
module.exports = propietarioRouter;
