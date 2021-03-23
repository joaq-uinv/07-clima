//!configuracion de express

const express = require("express");
const morgan = require("morgan");
const swaggerUI = require("swagger-ui-express");
const JSONSwagger = require("../swagger/swagger.json");
const config = require("../../config/indexConfig");
const logger = require("../logger/index");
class ServerExpress {
  constructor() {
    this.app = express();
    this.puerto = config.puerto;
    this._middlewares();
    this._configSwagger();
    this._rutas();
    this._noEncontrado();
    this._administradorDeErrores();
  }

  _middlewares() {
    this.app.use(express.json());
    this.app.use(morgan("tiny"));
  }

  //!hecho lo especificado en el comentario de /rutas/usuarios
  _rutas() {
    //p/ ver si aplicacion esta andando; suele usarse en empresas, en las que el area de infraestructura -manejan los svs- necesita que se le haga una peticion a la api p/corroborar que la aplicacion este andando
    this.app.head("/status", (req, res) => res.status(200).end());

    this.app.use(
      `${config.api.prefix}/usuarios`, //?poner prefijo /api/v1
      require("../../rutas/usuarios")
    );
  }

  _noEncontrado() {
    this.app.use((req, res, next) => {
      const err = new Error("No encontrado");
      err.codigo = 404;
      next(err);
    });
  }

  _administradorDeErrores() {
    this.app.use((err, req, res, next) => {
      const codigo = err.codigo || 505;
      logger.error(
        `${codigo} - ${err.message} - ${req.originalUrl} - ${req.method} -${req.ip}`
      );
      logger.error(err.stack);
      res.status(codigo);
      const body = { error: { codigo, message: err.message } };
      res.json(body);
    });
  }

  _configSwagger() {
    this.app.use(
      config.swagger.ruta,
      swaggerUI.serve,
      swaggerUI.setup(JSONSwagger)
    );
  }

  async empezar() {
    this.app.listen(this.puerto, (err) => {
      if (err) {
        logger.error(err);
        process.exit(1);
        return;
      }
    });
  }
}

//!las clases deben exportarse s/ estar e/ llaves
module.exports = ServerExpress;
