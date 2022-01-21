const { Router } = require('express');
const router = Router();

const {
	CrearAntecedentePatologico,
    ActualizarAntecedentePatologico,
    MostrarAntecedentePatologico
   
} = require('../controllers/AntecedentePatologico');

// Create
router.post("/new", CrearAntecedentePatologico);
router.put("/:id", ActualizarAntecedentePatologico)
router.get("/", MostrarAntecedentePatologico);


module.exports = router;