const logger = require("../loaders/logger/indexLogger");
const RepositorioClima = require("../repositorios/repositorioClima");
const repositorioClima = new RepositorioClima();
const RepositorioCiudad = require("../repositorios/repositorioCiudad");
const repositorioCiudad = new RepositorioCiudad();

const buscarClima = async (lon, lat) => {
  const climas = await repositorioClima.climaPorCoordenadas(lon, lat);

  logger.silly(JSON.stringify(climas));

  return {
    descripcion: climas.weather[0].description,
    temperatura: climas.main.temp,
    tempMin: climas.main.temp_min,
    tempMax: climas.main.temp_max,
  };
};

const climaPorIDCiudad = async (ciudad, id) => {
  const ciudades = await repositorioCiudad.buscarCiudades(ciudad);
  const ciudadesFiltradasPorID = ciudades.features.find(
    (city) => city.id === id
  );
  return repositorioClima.climaPorCoordenadas(
    ciudadesFiltradasPorID.geometry.coordinates[0],
    ciudadesFiltradasPorID.geometry.coordinates[1]
  );
};

module.exports = { buscarClima, climaPorIDCiudad };
