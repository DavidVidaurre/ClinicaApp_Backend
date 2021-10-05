const { Router } = require('express');
const router = Router();

const {
	CrearHistoria,
    ActualizarHistoria,
    MostrarHistoria,
    EliminarHistoria
} = require('../controllers/Historia');

// Create
router.post("/new", CrearHistoria);
router.put("/:id", ActualizarHistoria);
router.get("/", MostrarHistoria);
router.delete("/:id", EliminarHistoria)

module.exports = router;