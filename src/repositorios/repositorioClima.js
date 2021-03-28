const axios = require("axios");
const config = require("../config/indexConfig");
const logger = require("../loaders/logger/indexLogger");

class RepositorioClima {
  constructor() {
    this.unidades = "metric";
    this.lenguaje = "es";
    this.rutaBase = config.openWeatherMap.rutaBase;
    this.CLAVE_API = config.openWeatherMap.CLAVE_API;
  }

  async climaPorCoordenadas(lon, lat) {
    try {
      const instance = axios.create({
        baseURL: `${this.rutaBase}`,
        params: {
          appid: this.CLAVE_API,
          units: this.unidades,
          lang: this.lenguaje,
          lon,
          lat,
        },
      });

      const respuesta = await instance.get();
      return respuesta.data;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = RepositorioClima;
