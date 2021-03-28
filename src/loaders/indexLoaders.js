const ServerExpress = require("./server/ServerExpress");
const config = require("../config/indexConfig");
const logger = require("./logger/indexLogger");

const empezar = async () => {
  const sv = new ServerExpress();
  logger.info("Express cargado exitosamente");

  sv.empezar();
  logger.info(`Servidor iniciado en el puerto ${config.puerto}`);
};

module.exports = { empezar };
