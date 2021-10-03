const { Router } = require('express');
const router = Router();

const {
	CrearCitaVacuna,
    ActualizarCitaVacuna,
    MostrarCitaVacuna
} = require('../controllers/CitaVacuna');

// Create
router.post("/new", CrearCitaVacuna);
router.put("/:id", ActualizarCitaVacuna)
router.get("/", MostrarCitaVacuna);


module.exports = router;