const { Router } = require('express');
const router = Router();

const {
	CrearCita,
    ActualizarCita,
    MostrarCita
} = require('../controllers/Cita');

// Create
router.post("/new", CrearCita);
router.put("/:id", ActualizarCita)
router.get("/", MostrarCita);


module.exports = router;