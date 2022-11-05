const IndicacionOrden = require('../models/IndicacionOrden')
const Orden = require('../models/Orden')

const CrearIndicacionOrden = async (req, res) => {
    const {indicaciones, id_Orden} = req.body

    try{
        const idOrden = await Orden.findById(id_Orden)

        if(!idOrden){
            res.status(404).json({
                ok: false,
                msg: 'Orden no existe con ese id'
            })
        } else{
            const indicOrden = new IndicacionOrden(req.body)
            await indicOrden.save()

            res.status(201).json({
                ok: true,
                indicOrden: indicOrden
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

const ActualizarIndicacionOrden = async (req, res) => {
    const IdIndicOrden = req.params.id
    try{
        const IndicOrden = await IndicacionOrden.findById(IdIndicOrden)
        if(!IndicOrden){
            res.status(404).json({
                ok: false,
                msg: 'No existe indicación de orden con ese id'
            })
        } else{
            const nuevaIndicOrden = {
                ...req.body
            }
    
            const IndicacionOrdenActualizado = await IndicacionOrden.findByIdAndUpdate(
                IdIndicOrden,
                nuevaIndicOrden,
                {
                    new: true
                }
            )
    
            res.json({
                ok: true,
                evento: IndicacionOrdenActualizado
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

const EliminarIndicacionOrden = async (req, res) => {
    const IdIndicOrden = req.params.id
    const IndicOrder = await IndicacionOrden.findByIdAndDelete(IdIndicOrden)

    if(IndicOrder){
        return res.json({
            ok: true,
            msg: 'Indicación eliminada'
        })
    }
}

const MostrarIndicacionesOrden = async (req, res) => {
    const indicOrden = await IndicacionOrden.find()

    return res.json(indicOrden)
}

const EliminarIndicacionPorIdOrden = async (req, res) => {
    const idOrden = req.params.id
	const indicacionesOrden = await IndicacionOrden.find({id_Receta: idOrden});
	indicacionesOrden.map(async(indicacion) => await IndicacionOrden.findByIdAndDelete(indicacion._id))

	if(indicacionesOrden){
        return res.json({
            ok: true,
            msg: 'Medicamentos eliminados'
        })
    }
}

module.exports = {
    CrearIndicacionOrden,
    ActualizarIndicacionOrden,
    EliminarIndicacionOrden,
    MostrarIndicacionesOrden,
    EliminarIndicacionPorIdOrden
}