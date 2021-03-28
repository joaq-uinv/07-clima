const { Router } = require("express");
const router = Router();
const { ciudades } = require("../controladores/controladoresCiudades");

router.get("/:ciudad", ciudades);

module.exports = router;
