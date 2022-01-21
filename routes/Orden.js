const {Router} = require('express')
const router = Router()

const {
    CrearOrden,
    MostrarIndicacionesIdOrden,
    MostrarOrdenesIDHistClinica,
    MostradDatosParaOrden
} = require('../controllers/Orden')

//RUTAS
router.post("/new", CrearOrden)
router.get("/:id", MostrarIndicacionesIdOrden)
router.get("/id_HistClinica/:id", MostrarOrdenesIDHistClinica)
router.get("/datos/:id", MostradDatosParaOrden)

module.exports = router