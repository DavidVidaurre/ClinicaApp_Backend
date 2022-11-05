const { Router } = require('express');
const router = Router();

const {
    CrearReceta,
    ActualizarReceta,
    MostrarReceta,
    MostrarRecetaIDHistClinica,
    MostrarMedicamentosReceta,
    MostradDatosParaReceta,
    EliminarReceta
} = require('../controllers/Receta');

// Create
router.post("/new", CrearReceta);
router.put("/:id", ActualizarReceta)
router.get("/:id", MostrarReceta);
router.get("/idHistClinica/:id", MostrarRecetaIDHistClinica)
router.get("/idHistClinica/receta/:id", MostrarMedicamentosReceta)
router.get("/datos/:id", MostradDatosParaReceta)
router.delete("/:id", EliminarReceta)

module.exports = router;