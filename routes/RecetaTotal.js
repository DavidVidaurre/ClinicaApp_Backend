const { Router } = require('express');
const router = Router();

const {
    CrearRecetaTotal,
    ActualizarRecetaTotal,
    MostrarRecetaTotal,
    MostrarRecetaTotalIDHistClinica,
    MostrarMedicamentosRecetaTotal
} = require('../controllers/RecetaTotal');

// Create
router.post("/new", CrearRecetaTotal);
router.put("/:id", ActualizarRecetaTotal)
router.get("/", MostrarRecetaTotal);
router.get("/idHistClinica/:id", MostrarRecetaTotalIDHistClinica)
router.get("/idHistClinica/receta/:id", MostrarMedicamentosRecetaTotal)

module.exports = router;