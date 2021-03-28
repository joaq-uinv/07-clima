const dotenv = require("dotenv");
const envEncontrado = dotenv.config();

!envEncontrado ? new Error("No se pudo encontrar el archivo .env") : null;
process.env.NODE_ENV = process.env.NODE_ENV || "desarrollo";

module.exports = {
  puerto: process.env.PUERTO,
  api: { prefix: "/api/v1" },
  log: { level: process.env.LOG_LEVEL },
  swagger: { ruta: "/docs" },
  mapbox: {
    rutaBase: "https://api.mapbox.com/geocoding/v5/mapbox.places/",
    CLAVE_API: process.env.CLAVE_API_MAPBOX,
  },
  openWeatherMap: {
    rutaBase: "https://api.openweathermap.org/data/2.5/weather",
    CLAVE_API: process.env.CLAVE_API_OPENWEATHERMAP,
  },
};
