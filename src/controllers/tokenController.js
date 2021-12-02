//Token controler valida si el usuario esta autenticado
const jwt = require("jsonwebtoken");

class TokenController {
    //Metodo
    constructor() {}

    //Verifico si esta autenticado el uausio y lo pasa a las rutas privadas
    verifyAuth = (req, res, next) => {
        //capturo el token
        const token = this.getToken(req);
        //decodifico el token
        jwt.verify(token, process.env.JWT_PRIVATE_KEY, (error, decode) => {
            if (error) {
                res.status(401).json({ info: "Usuario No autorizado" });
            } else {
                next();
            }
        });
    };
    //Propiedades Inicializadora-- recibo el req como parametro
    getToken = (req) => {
        //obtengo los datos del Token
        let token = null;
        //si el token no es nullo o undefined
        let authorization = req.headers.authorization;
        if (authorization != null && authorization != undefined) {
            let arrayAuth = authorization.split(" ");
            //leo la posicion [1] del array y se la asigino al token
            token = arrayAuth[1];
        }
        //si no hay toke retorna null-
        return token;
    };
}
// lo mando como atributo de productController
module.exports = TokenController;