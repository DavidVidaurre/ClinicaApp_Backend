const {Router} = require('express');
const router = Router();

const {
    CrearReserva,
    ActualizarReserva,
    MostrarReservas,
    MostrarReservaPorID,
    EliminarReserva,
    MostrarNombreYFecha
} = require('../controllers/Reserva');

router.post("/new", CrearReserva);
router.put("/:id", ActualizarReserva);
router.get("/", MostrarReservas);
router.get("/id/:id", MostrarReservaPorID);
router.delete("/:id", EliminarReserva)
router.get("/datos", MostrarNombreYFecha)

module.exports = router;