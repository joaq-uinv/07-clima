const { Router } = require("express");
const router = Router();
const {
  obtenerUsuarios,
  crearUsuario,
  actualizarUsuario,
  actualizarUsuarioParcialmente,
  borrarUsuario,
} = require("../controladores/usuarios");

//! a este archivo de rutas va a ir todo lo que entre por /usuarios

router.get("/", obtenerUsuarios);
router.post("/", crearUsuario);
router.put("/:id", actualizarUsuario);
router.patch("/:id", actualizarUsuarioParcialmente);
router.delete("/:id", borrarUsuario);

module.exports = router;
