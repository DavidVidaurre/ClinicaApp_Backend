const { Router} = require('express')

const router = Router()

const {
    CrearIndicacionOrden,
    ActualizarIndicacionOrden,
    EliminarIndicacionOrden
} = require('../controllers/IndicacionOrden')

//Create
router.post("/new", CrearIndicacionOrden)
router.put("/:id", ActualizarIndicacionOrden)
router.delete("/:id", EliminarIndicacionOrden)

module.exports = router