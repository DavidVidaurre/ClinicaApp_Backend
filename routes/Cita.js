const { Router } = require('express');
const router = Router();

const {
	CrearCita,
    ActualizarCita,
    MostrarCita,
    EliminarCita,
    ActualizarIDHistClinicaParaCita
} = require('../controllers/Cita');

// Create routes
router.post("/new", CrearCita);
router.put("/:id", ActualizarCita)
router.get("/", MostrarCita);
router.delete("/:id", EliminarCita)
router.get("/fechaCita/:fecha", ActualizarIDHistClinicaParaCita)

module.exports = router;