const { Router } = require('express');
const router = Router();

const {
	CrearHistoria,
    ActualizarHistoria,
    MostrarHistoria,
    EliminarHistoria,
    MostrarPacientePorUsuario
} = require('../controllers/Historia');

// Create
router.post("/new", CrearHistoria);
router.put("/:id", ActualizarHistoria);
router.get("/", MostrarHistoria);
router.delete("/:id", EliminarHistoria)
router.get("/:id_Usuario", MostrarPacientePorUsuario)

module.exports = router;