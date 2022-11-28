import { Router } from 'express';
const router = Router();

import {
	CrearCita,
    ActualizarCita,
    MostrarCita,
    EliminarCita,
    ActualizarIDHistClinicaParaCita
} from '../controllers/Cita.js';

// Create
router.post("/new", CrearCita);
router.put("/:id", ActualizarCita)
router.get("/", MostrarCita);
router.delete("/:id", EliminarCita)
router.get("/fechaCita/:fecha", ActualizarIDHistClinicaParaCita)

export default router;