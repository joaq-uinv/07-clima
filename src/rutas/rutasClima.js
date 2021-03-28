const { Router } = require("express");
const router = Router();
const {
  climaSegunCoordenadas,
  climaSegunIDCiudad,
} = require("../controladores/controladoresClima");

router.get("/", climaSegunCoordenadas);
router.get("/:ciudad/:id", climaSegunIDCiudad);

module.exports = router;
