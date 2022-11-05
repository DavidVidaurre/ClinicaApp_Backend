const { Router} = require('express')

const router = Router()

const {
    CrearIndicacionOrden,
    ActualizarIndicacionOrden,
    EliminarIndicacionOrden,
    MostrarIndicacionesOrden,
    EliminarIndicacionPorIdOrden
} = require('../controllers/IndicacionOrden')

//Create
router.post("/new", CrearIndicacionOrden)
router.put("/:id", ActualizarIndicacionOrden)
router.delete("/:id", EliminarIndicacionOrden)
router.get("/", MostrarIndicacionesOrden)
router.delete("/idOrden/:id", EliminarIndicacionPorIdOrden)

module.exports = router