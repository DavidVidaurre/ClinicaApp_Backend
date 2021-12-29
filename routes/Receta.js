const { Router } = require('express');
const router = Router();

const {
    CrearReceta,
    ActualizarReceta,
    MostrarReceta,
    MostrarRecetaID,
    MostrarRecetaIDHistClinica,
    MostrarDatosParaReceta,
    EliminarMedicamentoReceta
} = require('../controllers/Receta');

// Create
router.post("/new", CrearReceta);
router.put("/:id", ActualizarReceta)
router.get("/", MostrarReceta);
router.get("/idHist/:id", MostrarRecetaID)
router.get("/idHistClinica/:id", MostrarRecetaIDHistClinica)
router.get("/datosRe/:id", MostrarDatosParaReceta)
router.delete("/:id", EliminarMedicamentoReceta)

module.exports = router;