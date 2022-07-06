const { Router } = require('express');
const router = Router();
const { validarJWT } = require('../middlewares/validar-jwt')

const {
	CrearHistClinica,
    MostrarHistClinica,
    ActualizarHistClinica,
    EliminarHistClinica,
    MostrarHistClinicaPaciente,
    MostrarHistClinicaId,
    MostrarPesoyEdad,
    MostrarDatosHistoria,
    MostrarMedicamentoPorIDHistClinica
} = require('../controllers/HistClinica');

// Create
router.post("/new", CrearHistClinica);
router.put("/:id", ActualizarHistClinica);
router.delete("/:id", EliminarHistClinica);
router.get("/:id", MostrarHistClinicaPaciente);
router.get("/", MostrarHistClinica);
router.get("/id/:id", MostrarHistClinicaId);
router.get("/idPaciente/:id", MostrarPesoyEdad);
router.get("/idPaciente/id/:id", MostrarDatosHistoria)
router.get("/medicamentos/:idHistClinica", MostrarMedicamentoPorIDHistClinica)

module.exports = router;