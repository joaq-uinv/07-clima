const axios = require("axios");
const config = require("../config/indexConfig");
const logger = require("../loaders/logger/indexLogger");

class RepositorioCiudad {
  constructor() {
    this.limite = 10;
    this.lenguaje = "es";
    this.rutaBase = config.mapbox.rutaBase;
    this.CLAVE_API = config.mapbox.CLAVE_API;
  }

  async buscarCiudades(ciudad) {
    throw new Error("Error de prueba");
    try {
      const instance = axios.create({
        baseURL: `${this.rutaBase}${ciudad}.json`,
        params: {
          access_token: this.CLAVE_API,
          limit: this.limite,
          language: this.lenguaje,
        },
      });

      const respuesta = await instance.get();
      return respuesta.data;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = RepositorioCiudad;
