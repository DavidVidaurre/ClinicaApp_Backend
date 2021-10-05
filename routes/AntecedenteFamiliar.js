const { Router } = require('express');
const router = Router();

const { CrearAntecedenteFamiliar, 
    ActualizarAntecedenteFamiliar, 
    MostrarAntecedenteFamiliar 
} = require('../controllers/AntecedenteFamiliar');

// Create
router.post("/new", CrearAntecedenteFamiliar);
router.put("/:id", ActualizarAntecedenteFamiliar)
router.get("/", MostrarAntecedenteFamiliar);


module.exports = router;