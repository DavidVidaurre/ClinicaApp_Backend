const { Router } = require('express');
const router = Router();

const { CrearHistVacuna, ActualizarHistVacuna, MostrarHistVacuna } = require('../controllers/HistVacuna');

// Create
router.post("/new", CrearHistVacuna);
router.put("/:id", ActualizarHistVacuna)
router.get("/", MostrarHistVacuna);


module.exports = router;