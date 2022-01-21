const { Router } = require('express');
const router = Router();

const {
    CrearVacuna,
    ActualizarVacuna,
    MostrarVacuna,
    VacunaId
} = require('../controllers/Vacuna');

// Create
router.post("/new", CrearVacuna);
router.put("/:id", ActualizarVacuna)
router.get("/", MostrarVacuna);
router.get("/:id", VacunaId);

module.exports = router;