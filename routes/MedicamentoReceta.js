const { Router } = require('express');
const router = Router();

const {
    CrearMedicamentoReceta,
    ActualizarMedicamentoReceta,
    EliminarMedicamentoReceta,
    MostrarNombreMedicina,
    MostrarMedicinas,
    EliminarMedicamentoPorIdReceta
} = require('../controllers/MedicamentoReceta');

// Create
router.post("/new", CrearMedicamentoReceta);
router.put("/:id", ActualizarMedicamentoReceta)
router.delete("/:id", EliminarMedicamentoReceta)
router.get('/nombresMedicina', MostrarNombreMedicina)
router.get('/', MostrarMedicinas)
router.delete("/idReceta/:id", EliminarMedicamentoPorIdReceta)

module.exports = router;