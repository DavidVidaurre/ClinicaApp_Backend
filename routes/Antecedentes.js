const { Router } = require('express');
const router = Router();

const { 
    CrearAntecedentes, 
    ActualizarAntecedentes, 
    MostrarAntecedentes ,
    AntecedentesId
} = require('../controllers/Antecedentes');

// Create
router.post("/new", CrearAntecedentes);
router.put("/:id", ActualizarAntecedentes)
router.get("/", MostrarAntecedentes);
router.get("/:id", AntecedentesId);


module.exports = router;