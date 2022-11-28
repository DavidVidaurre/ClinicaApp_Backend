import { Router } from 'express';
const router = Router();

import { 
    CrearAntecedentes, 
    ActualizarAntecedentes, 
    MostrarAntecedentes ,
    AntecedentesId
} from '../controllers/Antecedentes.js';

// Create
router.post("/new", CrearAntecedentes);
router.put("/:id", ActualizarAntecedentes)
router.get("/", MostrarAntecedentes);
router.get("/:id", AntecedentesId);


// export router;
export default router