const { Router } = require('express');
const router = Router();

const {
	CrearCitaConsulta,
    ActualizarCitaConsulta,
    MostrarCitaConsulta
} = require('../controllers/CitaConsulta');

// Create
router.post("/new", CrearCitaConsulta);
router.put("/:id", ActualizarCitaConsulta)
router.get("/", MostrarCitaConsulta);


module.exports = router;