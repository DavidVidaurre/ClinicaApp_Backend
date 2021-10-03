const { Router } = require('express');
const router = Router();

const {
	CrearAntecedenteNatal,
    ActualizarAntecedenteNatal,
    MostrarAntecedenteNatal
   
} = require('../controllers/AntecedenteNatal');

// Create
router.post("/new", CrearAntecedenteNatal);
router.put("/:id", ActualizarAntecedenteNatal)
router.get("/", MostrarAntecedenteNatal);


module.exports = router;