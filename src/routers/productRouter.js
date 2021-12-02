const { Router } = require("express");
const ProductController = require("../controllers/productController");
const TokenController = require("../controllers/tokenController");

class ProductRouter {
  constructor() {
    this.router = Router();
    this.#config();
  }
  //#- crea ruta privada #config() y el this.#copnfig()

  #config() {
    let tokenC = new TokenController();
    //contruir objeto
    const productC = new ProductController();
    //configuro rutas
    //ruta getAll-Publica
    this.router.get("/product", productC.getAll);

    //-------------------PONGO RUTAS PRIVADAS MIDELLWARE------
    //SE EJECUTA EN ORDEN DE UBICAXION- next es para que siga si cumple
    this.router.use(tokenC.verifyAuth);
    //ruta crear Privada
    this.router.post("/product", productC.create);
    //ruta de update
    this.router.put("/product", productC.update);
    //rutas del get
    this.router.get("/product/user", productC.getByUser);
    //ruta delete
    this.router.delete("/product", productC.delete);
  }
}
module.exports = ProductRouter;
