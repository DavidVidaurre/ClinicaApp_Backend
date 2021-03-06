const { Router } = require('express');
const router = Router();

const {
	CrearHistoria,
	ActualizarHistoria,
	MostrarHistoria,
	EliminarHistoria,
	MostrarPacientePorUsuario,
	MostrarHistoriaPorDNI,
	MostrarHistoriaPorID
} = require('../controllers/Historia');

// Create
router.get('/hijos/:id_Usuario', MostrarPacientePorUsuario);
router.post('/new', CrearHistoria);
router.put('/:id', ActualizarHistoria);
router.get('/', MostrarHistoria);
router.get('/:dni_paciente', MostrarHistoriaPorDNI);
router.get("/id/:id", MostrarHistoriaPorID);
router.delete('/:id', EliminarHistoria);

module.exports = router;
