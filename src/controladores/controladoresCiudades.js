const express = require("express");
const Exito = require("../handlers/administradorDeExito");
const { buscarCiudad } = require("../servicios/serviciosCiudad");

/**
 *
 * @param {express.Request} req
 * @param {express.Request} res
 */

const ciudades = async (req, res) => {
  const ciudades = await buscarCiudad(req.params.ciudad);
  const exito = new Exito(ciudades);
  res.json(exito);
};

module.exports = { ciudades };
