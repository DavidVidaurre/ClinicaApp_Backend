const { Router } = require('express');
const router = Router();

const {
	CrearCita,
    ActualizarCita,
    MostrarCita,
    EliminarCita
} = require('../controllers/Cita');

// Create
router.post("/new", CrearCita);
router.put("/:id", ActualizarCita)
router.get("/", MostrarCita);
router.delete("/:id", EliminarCita)

module.exports = router;