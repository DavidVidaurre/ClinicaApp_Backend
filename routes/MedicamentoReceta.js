const { Router } = require('express');
const router = Router();

const {
    CrearMedicamentoReceta,
    ActualizarMedicamentoReceta,
    EliminarMedicamentoReceta
} = require('../controllers/MedicamentoReceta');

// Create
router.post("/new", CrearMedicamentoReceta);
router.put("/:id", ActualizarMedicamentoReceta)
router.delete("/:id", EliminarMedicamentoReceta)

module.exports = router;