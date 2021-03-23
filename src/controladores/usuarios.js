const express = require("express");

/**
 *
 * @param {express.Request} req
 * @param {express.Request} res
 */

const obtenerUsuarios = (req, res) => {
  const usuarios = [
    {
      id: 1,
      nombre: "Joaquín",
    },
    {
      id: 2,
      nombre: "Fernando",
    },
  ];
  res.json(usuarios);
};

/**
 *
 * @param {express.Request} req
 * @param {express.Request} res
 */

const crearUsuario = (req, res) => {
  const usuario = req.body;
  usuario.id = 123;

  res.json({ msj: "Usuario creado", usuario });
};

/**
 *
 * @param {express.Request} req
 * @param {express.Request} res
 */

const actualizarUsuario = (req, res) => {
  const { id } = req.params;
  const usuario = req.body;
  usuario.id = id;

  res.json({ msj: "Usuario modificado", usuario });
};

/**
 *
 * @param {express.Request} req
 * @param {express.Request} res
 */

const actualizarUsuarioParcialmente = (req, res) =>
  res.json({ msj: "Usuario actualizado con patch" });

/**
 *
 * @param {express.Request} req
 * @param {express.Request} res
 */

const borrarUsuario = (req, res) => {
  const { id } = req.params;
  res.json({ msj: `Usuario con ID: ${id} borrado` });
};

module.exports = {
  obtenerUsuarios,
  crearUsuario,
  actualizarUsuario,
  actualizarUsuarioParcialmente,
  borrarUsuario,
};
