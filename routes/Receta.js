const { Router } = require('express');
const router = Router();

const {
    CrearReceta,
    ActualizarReceta,
    MostrarReceta
} = require('../controllers/Receta');

// Create
router.post("/new", CrearReceta);
router.put("/:id", ActualizarReceta)
router.get("/", MostrarReceta);

module.exports = router;