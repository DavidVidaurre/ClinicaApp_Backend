const { Router } = require('express');
const router = Router();

const {
	CrearExamenFisico,
    MostrarExamenFisico,
    ActualizarExamenFisico
} = require('../controllers/ExamenFisico');

// Create
router.post("/new", CrearExamenFisico);
router.put("/:id", ActualizarExamenFisico)
router.get("/", MostrarExamenFisico);


module.exports = router;