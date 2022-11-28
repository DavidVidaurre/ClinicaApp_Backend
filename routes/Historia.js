import { Router } from 'express';
const router = Router();

import {
	CrearHistoria,
	ActualizarHistoria,
	MostrarHistoria,
	EliminarHistoria,
	MostrarPacientePorUsuario,
	MostrarHistoriaPorDNI,
	MostrarHistoriaPorID
} from '../controllers/Historia.js';

// Create
router.get('/hijos/:id_Usuario', MostrarPacientePorUsuario);
router.post('/new', CrearHistoria);
router.put('/:id', ActualizarHistoria);
router.get('/', MostrarHistoria);
router.get('/:dni_paciente', MostrarHistoriaPorDNI);
router.get("/id/:id", MostrarHistoriaPorID);
router.delete('/:id', EliminarHistoria);

export default router;
