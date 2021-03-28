const express = require("express");
const Exito = require("../handlers/administradorDeExito");
const {
  buscarClima,
  climaPorIDCiudad,
} = require("../servicios/serviciosClima");

/**
 *
 * @param {express.Request} req
 * @param {express.Request} res
 */

const climaSegunCoordenadas = async (req, res, next) => {
  try {
    const { lon, lat } = req.query;
    const clima = await buscarClima(lon, lat);
    const exito = new Exito(clima);
    res.json(exito);
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Request} res
 */

const climaSegunIDCiudad = async (req, res, next) => {
  try {
    const { ciudad, id } = req.params;
    const clima = await climaPorIDCiudad(ciudad, id);
    const exito = new Exito(clima);
    res.json(exito);
  } catch (error) {
    next(error);
  }
};

module.exports = { climaSegunCoordenadas, climaSegunIDCiudad };
