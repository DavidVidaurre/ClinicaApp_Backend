const { Router } = require('express');
const router = Router();

const {
	CrearHistClinica,
    MostrarHistClinica,
    ActualizarHistClinica,
    MostrarHistClinicaPaciente
} = require('../controllers/HistClinica');

// Create
router.post("/new", CrearHistClinica);
router.put("/:id", ActualizarHistClinica);
router.get("/:id", MostrarHistClinicaPaciente);
router.get("/", MostrarHistClinica);


module.exports = router;