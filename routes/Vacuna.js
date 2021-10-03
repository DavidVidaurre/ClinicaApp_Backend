const { Router } = require('express');
const router = Router();

const {
    CrearVacuna,
    ActualizarVacuna,
    MostrarVacuna
} = require('../controllers/Vacuna');

// Create
router.post("/new", CrearVacuna);
router.put("/:id", ActualizarVacuna)
router.get("/", MostrarVacuna);

module.exports = router;