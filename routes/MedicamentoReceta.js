import { Router } from 'express';
const router = Router();

import {
    CrearMedicamentoReceta,
    ActualizarMedicamentoReceta,
    EliminarMedicamentoReceta,
    MostrarNombreMedicina,
    MostrarMedicinas,
    EliminarMedicamentoPorIdReceta
} from '../controllers/MedicamentoReceta.js';

// Create
router.post("/new", CrearMedicamentoReceta);
router.put("/:id", ActualizarMedicamentoReceta)
router.delete("/:id", EliminarMedicamentoReceta)
router.get('/nombresMedicina', MostrarNombreMedicina)
router.get('/', MostrarMedicinas)
router.delete("/idReceta/:id", EliminarMedicamentoPorIdReceta)

export default router;