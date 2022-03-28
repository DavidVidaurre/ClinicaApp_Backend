const Orden = require('../models/Orden')
const IndicacionOrden = require('../models/IndicacionOrden')
const HistClinica = require('../models/HistClinica')
const Historia = require('../models/Historia')

const CrearOrden = async(req, res) => {
    const {id_HistClinica} = req.body
    try{
        const idHistClinica = await HistClinica.findById(id_HistClinica)

        if (!idHistClinica) {
            res.status(404).json({
                ok: false,
                msg: 'Historia Clinica no existe con ese id',
            });
        } else{
            const orden = new Orden(req.body)
            await orden.save()

            res.status(201).json({
                ok: true,
                orden: orden
            })
        }
        
    } catch(error){
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })
    }
}

const MostrarIndicacionesIdOrden = async (req, res) => {
    const IDOrden = req.params.id
    const IndicacionesOrden = await IndicacionOrden.find({id_Orden:IDOrden})
    
    return res.json(IndicacionesOrden)
}

const MostrarOrdenesIDHistClinica = async (req, res) => {
    const idHistClinica = req.params.id
    const ordenes = await Orden.find({id_HistClinica: idHistClinica})
    
    return res.json(ordenes)
}

const MostradDatosParaOrden = async(req, res) => {
    const idOrden = req.params.id
    // const idHistClinica = req.params.id

    const orden = await Orden.findById(idOrden)
    const histClinica = await HistClinica.findOne({_id: orden.id_HistClinica})
    const historia = await Historia.findOne({_id: histClinica.id_Historia})
    // return res.json(historia)
    return res.json({
        histClinica,
        historia})
}

module.exports = {
    CrearOrden,
    MostrarIndicacionesIdOrden,
    MostrarOrdenesIDHistClinica,
    MostradDatosParaOrden
}