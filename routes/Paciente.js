const { Router } = require('express');
const router = Router();

const {
	CrearPaciente,
    MostrarPaciente
} = require('../controllers/Paciente');

// Create
router.post("/new", CrearPaciente);
router.get("/", MostrarPaciente);

module.exports = router;