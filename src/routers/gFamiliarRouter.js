const { Router } = require("express");
const gFamiliarController = require("../controllers/gFamiliarController");
const TokenController = require("../controllers/tokenController");

class gfamiliarRouter {
  constructor() {
    this.router = Router();
    this.#config();
  }
  //#- crea ruta privada #config() y el this.#copnfig()

  #config() {
    let tokenC = new TokenController();
    //contruir objeto
    const gfamiliarC = new gFamiliarController();
    //configuro rutas
    //ruta getAll-Publica
    this.router.get("/gfamiliar", gfamiliarC.getAll);

    //-------------------PONGO RUTAS PRIVADAS MIDELLWARE------
    //SE EJECUTA EN ORDEN DE UBICAXION- next es para que siga si cumple
    this.router.use(tokenC.verifyAuth);
    //ruta crear Privada
    this.router.post("/gfamiliar", gfamiliarC.create);
    //ruta de update
    this.router.put("/gfamiliar/:id", gfamiliarC.update);
    //rutas del get
    this.router.get("/gfamiliar/:id", gfamiliarC.getByUser);
    //ruta delete
    this.router.delete("/gfamiliar/:id", gfamiliarC.delete);
  }
}
module.exports = gfamiliarRouter;
