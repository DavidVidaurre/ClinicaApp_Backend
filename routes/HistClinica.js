const { Router } = require('express');
const router = Router();

const {
	CrearHistClinica,
    MostrarHistClinica,
    ActualizarHistClinica,
    MostrarHistClinicaPaciente,
    MostrarHistClinicaId
} = require('../controllers/HistClinica');

// Create
router.post("/new", CrearHistClinica);
router.put("/:id", ActualizarHistClinica);
router.get("/:id", MostrarHistClinicaPaciente);
router.get("/", MostrarHistClinica);
router.get("/id/:id", MostrarHistClinicaId);


module.exports = router;