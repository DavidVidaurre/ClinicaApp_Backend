import { Router } from 'express';
const router = Router();

import {
    CrearVacuna,
    ActualizarVacuna,
    MostrarVacuna,
    VacunaId
} from '../controllers/Vacuna.js';

// Create
router.post("/new", CrearVacuna);
router.put("/:id", ActualizarVacuna)
router.get("/", MostrarVacuna);
router.get("/:id", VacunaId);

export default router;