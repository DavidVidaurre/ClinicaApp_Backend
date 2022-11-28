import { Router } from 'express';
const router = Router();

import {
    CrearReceta,
    ActualizarReceta,
    MostrarReceta,
    MostrarRecetaIDHistClinica,
    MostrarMedicamentosReceta,
    MostradDatosParaReceta,
    EliminarReceta
} from '../controllers/Receta.js';

// Create
router.post("/new", CrearReceta);
router.put("/:id", ActualizarReceta)
router.get("/:id", MostrarReceta);
router.get("/idHistClinica/:id", MostrarRecetaIDHistClinica)
router.get("/idHistClinica/receta/:id", MostrarMedicamentosReceta)
router.get("/datos/:id", MostradDatosParaReceta)
router.delete("/:id", EliminarReceta)

export default router;