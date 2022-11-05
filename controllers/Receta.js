const Receta = require('../models/Receta')
const MedicamentoReceta = require('../models/MedicamentoReceta')
const HistClinica = require('../models/HistClinica')
const Historia = require('../models/Historia');

const CrearReceta = async (req, res) => {
    const { fecha, fechaProx, id_HistClinica } = req.body;
    try {
        const idHistClinica = await HistClinica.findById(id_HistClinica)

        if (!idHistClinica) {
            res.status(404).json({
                ok: false,
                msg: 'Historia Clinica no existe con ese id',
            });
        } else{
            let receta = new Receta(req.body)
    
            await receta.save()
    
            res.status(201).json({
                ok: true,
                receta: receta
            })
        }
        
    } catch (error) {
        console.log('Error: ' + error.toString());
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador',
        });
    }
};

const ActualizarReceta = async (req, res) => {
	const recetaId = req.params.id;
	const {id_HistClinica} = req.body;
	const idHistClinica= id_HistClinica;
	try {
		const receta = await Receta.findById(recetaId);
		if (!receta) {
			res.status(404).json({
				ok: false,
				msg: 'Receta no existe con ese id',
			});
		}
		if (receta.id_HistClinica.toString() !== idHistClinica) {
			return res.status(401).json({
				ok: false,
				msg: 'No tiene privilegio de editar este Paciente',
			});
		}
		const nuevaReceta= {
			...req.body,
		};

		const Receta_Actualizado = await Receta.findByIdAndUpdate(
			recetaId,
			nuevaReceta,
			{
				new: true,
			}
		);
		res.json({
			ok: true,
			receta: Receta_Actualizado,
		});
	} catch (e) {
		console.log(e);
		res.status(500).json({
			ok: false,
			msg: 'Hable con el administrador',
		});
	}
};

const MostrarReceta = async (req, res) => {
    const receta = await Receta.findById(req.params.id);
    return res.json(receta);
}

const MostrarMedicamentosReceta = async (req, res) => {
    const IDReceta = req.params.id
    const medicamentosReceta = await MedicamentoReceta.find({id_Receta:IDReceta})
    
    return res.json(medicamentosReceta)
}

const MostrarRecetaIDHistClinica = async (req, res) => {
	const idHistClinica = req.params.id
    const receta = await Receta.find({id_HistClinica: idHistClinica})
    
    return res.json(receta)
}

const MostradDatosParaReceta = async(req, res) => {
    const idReceta = req.params.id

    const receta = await Receta.findById(idReceta)
    const histClinica = await HistClinica.findOne({_id: receta.id_HistClinica})
    const historia = await Historia.findOne({_id: histClinica.id_Historia})
    return res.json({
        histClinica,
        historia
    })
}

const EliminarReceta = async (req, res) => {
    const idReceta = req.params.id;

    const recetaElim = await Receta.findByIdAndDelete(idReceta)

    if (recetaElim) {
        return res.json({
            ok: true,
            msg: recetaElim,
        });
	}
}

module.exports = {
    CrearReceta,
    ActualizarReceta,
    MostrarReceta,
    MostrarRecetaIDHistClinica,
    MostrarMedicamentosReceta,
    MostradDatosParaReceta,
    EliminarReceta
}