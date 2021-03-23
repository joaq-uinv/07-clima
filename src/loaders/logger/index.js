//un logger es un archivo que registra eventos o msjs e/ != usuarios que suceden en un programa. se importa en todos los archivos donde haya un console.log y se reemplaza esas lineas por el logger

const winston = require("winston");
const config = require("../../config/indexConfig");

const transports = [];
transports.push(new winston.transports.Console());

const LoggerInstance = winston.createLogger({
  level: config.log.level,
  format: winston.format.simple(),
  transports,
});

module.exports = LoggerInstance;
