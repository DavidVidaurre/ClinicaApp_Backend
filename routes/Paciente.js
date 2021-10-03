const { Router } = require('express');
const router = Router();

const {
	CrearPaciente,
    ActualizarPaciente,
    MostrarPaciente
} = require('../controllers/Paciente');

// Create
router.post("/new", CrearPaciente);
router.put("/:id", ActualizarPaciente);
router.get("/", MostrarPaciente);


module.exports = router;