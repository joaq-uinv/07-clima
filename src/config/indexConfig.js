//!archivo donde se encuentrar las configuraciones del sv. gralmente se obtenien del archivo .env

const dotenv = require("dotenv");
const envEncontrado = dotenv.config();

!envEncontrado ? new Error("No se pudo encontrar el archivo .env") : null;
process.env.NODE_ENV = process.env.NODE_ENV || "desarrollo";

module.exports = {
  puerto: process.env.PUERTO,
  api: { prefix: "/api/v1" }, //!se va a querer que este prefijo este en todas las rutas de la aplicacion
  log: { level: process.env.LOG_LEVEL },
  swagger: { ruta: "/docs" },
};
