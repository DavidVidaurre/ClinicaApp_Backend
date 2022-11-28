import {Router} from 'express'
const router = Router()

import {
    CrearOrden,
    MostrarIndicacionesIdOrden,
    MostrarOrdenesIDHistClinica,
    MostradDatosParaOrden,
    EliminarOrden
} from '../controllers/Orden.js'

//RUTAS
router.post("/new", CrearOrden)
router.get("/:id", MostrarIndicacionesIdOrden)
router.get("/id_HistClinica/:id", MostrarOrdenesIDHistClinica)
router.get("/datos/:id", MostradDatosParaOrden)
router.delete("/:id", EliminarOrden)

export default router