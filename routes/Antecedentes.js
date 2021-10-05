const { Router } = require('express');
const router = Router();

const { 
    CrearAntecedentes, 
    ActualizarAntecedentes, 
    MostrarAntecedentes 
} = require('../controllers/Antecedentes');

// Create
router.post("/new", CrearAntecedentes);
router.put("/:id", ActualizarAntecedentes)
router.get("/", MostrarAntecedentes);


module.exports = router;