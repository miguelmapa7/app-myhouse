const { Router } = require("express");
const contactoController = require("../controllers/contactoControllers");
const TokenController = require("../controllers/tokenController");

class contactoRouter {
  constructor() {
    this.router = Router();
    this.#config();
  }
  //#- crea ruta privada #config() y el this.#copnfig()

  #config() {
    let tokenC = new TokenController();
    //contruir objeto
    const contactoC = new contactoController();
    //configuro rutas
    //ruta getAll-Publica
    this.router.get("/contacto", contactoC.getAll);

    //-------------------PONGO RUTAS PRIVADAS MIDELLWARE------
    //SE EJECUTA EN ORDEN DE UBICAXION- next es para que siga si cumple
    this.router.use(tokenC.verifyAuth);
    //ruta crear Privada
    this.router.post("/contacto", contactoC.create);
    //ruta de update
    this.router.put("/contacto/:id", contactoC.update);
    //rutas del get
    this.router.get("/contacto/:id", contactoC.getByUser);
    //ruta delete
    this.router.delete("/contacto/:id", contactoC.delete);
  }
}
module.exports = contactoRouter;
