const logger = require("../loaders/logger/indexLogger");
const RepositorioCiudad = require("../repositorios/repositorioCiudad");
const repositorio = new RepositorioCiudad();

const buscarCiudad = async (ciudad) => {
  const ciudades = await repositorio.buscarCiudades(ciudad);

  return ciudades.features.map((ciudad) => {
    return {
      id: ciudad.id,
      nombre: ciudad.place_name,
      longitud: ciudad.geometry.coordinates[0],
      latitud: ciudad.geometry.coordinates[1],
    };
  });
};

module.exports = { buscarCiudad };
