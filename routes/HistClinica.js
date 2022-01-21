const { Router } = require('express');
const router = Router();
const { validarJWT } = require('../middlewares/validar-jwt')

const {
	CrearHistClinica,
    MostrarHistClinica,
    ActualizarHistClinica,
    MostrarHistClinicaPaciente,
    MostrarHistClinicaId,
    MostrarPesoyEdad,
    MostrarDatosHistoria
} = require('../controllers/HistClinica');

// Create
router.post("/new", validarJWT, CrearHistClinica);
router.put("/:id", ActualizarHistClinica);
router.get("/:id", MostrarHistClinicaPaciente);
router.get("/", MostrarHistClinica);
router.get("/id/:id", MostrarHistClinicaId);
router.get("/idPaciente/:id", MostrarPesoyEdad);
router.get("/idPaciente/id/:id", MostrarDatosHistoria)

module.exports = router;