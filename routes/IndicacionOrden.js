import { Router} from 'express'

const router = Router()

import {
    CrearIndicacionOrden,
    ActualizarIndicacionOrden,
    EliminarIndicacionOrden,
    MostrarIndicacionesOrden,
    EliminarIndicacionPorIdOrden
} from '../controllers/IndicacionOrden.js'

//Create
router.post("/new", CrearIndicacionOrden)
router.put("/:id", ActualizarIndicacionOrden)
router.delete("/:id", EliminarIndicacionOrden)
router.get("/", MostrarIndicacionesOrden)
router.delete("/idOrden/:id", EliminarIndicacionPorIdOrden)

export default router