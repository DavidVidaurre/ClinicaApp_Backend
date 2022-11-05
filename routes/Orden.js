const {Router} = require('express')
const router = Router()

const {
    CrearOrden,
    MostrarIndicacionesIdOrden,
    MostrarOrdenesIDHistClinica,
    MostradDatosParaOrden,
    EliminarOrden
} = require('../controllers/Orden')

//RUTAS
router.post("/new", CrearOrden)
router.get("/:id", MostrarIndicacionesIdOrden)
router.get("/id_HistClinica/:id", MostrarOrdenesIDHistClinica)
router.get("/datos/:id", MostradDatosParaOrden)
router.delete("/:id", EliminarOrden)

module.exports = router