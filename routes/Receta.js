const { Router } = require('express');
const router = Router();

const {
    CrearReceta,
    ActualizarReceta,
    MostrarReceta,
    MostrarRecetaID,
    MostrarRecetaIDHistClinica,
    MostrarDatosParaReceta
} = require('../controllers/Receta');

// Create
router.post("/new", CrearReceta);
router.put("/:id", ActualizarReceta)
router.get("/", MostrarReceta);
router.get("/idHist/:id", MostrarRecetaID)
router.get("/idHistClinica/:id", MostrarRecetaIDHistClinica)
router.get("/datosRe/:id", MostrarDatosParaReceta)

module.exports = router;