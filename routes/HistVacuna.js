import { Router } from 'express';
const router = Router();

import { 
    CrearHistVacuna, 
    ActualizarHistVacuna, 
    MostrarHistVacuna 
} from '../controllers/HistVacuna.js';

// Create
router.post("/new", CrearHistVacuna);
router.put("/:id", ActualizarHistVacuna)
router.get("/", MostrarHistVacuna);


export default router;