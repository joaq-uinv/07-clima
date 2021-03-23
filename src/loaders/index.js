//!archivo en el que se va a instanciar express

const ServerExpress = require("./server/ServerExpress");
const config = require("../config/indexConfig");
const logger = require("./logger/index");

const empezar = async () => {
  const sv = new ServerExpress();
  logger.info("Express cargado exitosamente");

  sv.empezar();
  logger.info(`Servidor iniciado en el puerto ${config.puerto}`);
};

module.exports = { empezar };
