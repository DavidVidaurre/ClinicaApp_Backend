import {Router} from 'express';
import { validarJWT } from '../middlewares/validar-jwt.js';
const router = Router();

import {
    CrearReserva,
    ActualizarReserva,
    MostrarReservas,
    MostrarReservaPorID,
    EliminarReserva,
    MostrarNombreYFecha
} from '../controllers/Reserva.js';

router.post("/new", CrearReserva);
router.put("/:id", ActualizarReserva);
router.get("/", MostrarReservas);
router.get("/id/:id", MostrarReservaPorID);
router.delete("/:id", EliminarReserva)
router.get("/datos", MostrarNombreYFecha)

export default router;