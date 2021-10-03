const { Router } = require('express');
const router = Router();

const {
	CrearHistClinica,
    MostrarHistClinica,
    ActualizarHistClinica
} = require('../controllers/HistClinica');

// Create
router.post("/new", CrearHistClinica);
router.put("/:id", ActualizarHistClinica);
router.get("/", MostrarHistClinica);


module.exports = router;