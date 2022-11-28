import { Router } from 'express';
const router = Router();
import { validarJWT } from '../middlewares/validar-jwt.js'

import {
	CrearHistClinica,
    MostrarHistClinica,
    ActualizarHistClinica,
    EliminarHistClinica,
    MostrarHistClinicaPaciente,
    MostrarHistClinicaId,
    MostrarPesoyEdad,
    MostrarDatosHistoria,
    MostrarMedicamentoPorIDHistClinica
} from '../controllers/HistClinica.js';

// Create routes
router.post("/new", CrearHistClinica);
router.put("/:id", ActualizarHistClinica);
router.delete("/:id", EliminarHistClinica);
router.get("/:id", MostrarHistClinicaPaciente);
router.get("/", MostrarHistClinica);
router.get("/id/:id", MostrarHistClinicaId);
router.get("/idPaciente/:id", MostrarPesoyEdad);
router.get("/idPaciente/id/:id", MostrarDatosHistoria)
router.get("/medicamentos/:idHistClinica", MostrarMedicamentoPorIDHistClinica)

export default router;