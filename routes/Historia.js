const { Router } = require('express');
const router = Router();

const {
	CrearHistoria,
    ActualizarHistoria,
    MostrarHistoria
} = require('../controllers/Historia');

// Create
router.post("/new", CrearHistoria);
router.put("/:id", ActualizarHistoria);
router.get("/", MostrarHistoria);


module.exports = router;