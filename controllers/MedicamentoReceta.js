import { response } from 'express';
import MedicamentoReceta from '../models/MedicamentoReceta.js';
import Receta from '../models/Receta.js'

const CrearMedicamentoReceta = async (req, res) => {
        const { cantidad, nombreMedicina, indicaciones, id_Receta } = req.body;
        try {
            const idReceta = await Receta.findById(id_Receta)

			if(!idReceta){
				res.status(404).json({
					ok: false,
					msg: 'Receta no existe con ese id'
				})
			} else{
				const medicamentoReceta = new MedicamentoReceta(req.body)
				await medicamentoReceta.save();
				
				res.status(201).json({
					ok: true,
					medicamentoReceta: medicamentoReceta,
				});
			}
        } catch (error) {
            console.log('Error: ' + error.toString());
            res.status(500).json({
                ok: false,
                msg: 'Por favor hable con el administrador',
            });
        }
 };

const ActualizarMedicamentoReceta = async (req, res = response) => {
	const idMedicamentoReceta = req.params.id
	try {
		const medicamentoReceta = await MedicamentoReceta.findById(idMedicamentoReceta);
		if (!medicamentoReceta) {
			res.status(404).json({
				ok: false,
				msg: 'Medicamento no existe con ese id',
			});
		} else{
			const nuevaMedicamentoReceta= {
				...req.body,
			};
	
			const MedicamentoReceta_Actualizado = await MedicamentoReceta.findByIdAndUpdate(
				idMedicamentoReceta,
				nuevaMedicamentoReceta,
				{
					new: true,
				}
			);
			res.json({
				ok: true,
				medicamentoReceta: MedicamentoReceta_Actualizado,
			});
		}
	} catch (e) {
		console.log(e);
		res.status(500).json({
			ok: false,
			msg: 'Hable con el administrador',
		});
	}
};

const EliminarMedicamentoReceta = async (req, res) => {
    const idMedicamentoReceta = req.params.id
    const medicamentoReceta = await MedicamentoReceta.findByIdAndDelete(idMedicamentoReceta)

    if(medicamentoReceta){
        return res.json({
            ok: true,
            msg: 'Medicamento eliminado'
        })
    }
}

const MostrarNombreMedicina = async(req, res)=>{
	const medicinas = await MedicamentoReceta.find();
	const cantidadMedic =medicinas.map((item) => {return item.cantidad})
	const nombreMedic =medicinas.map((item) => {return item.nombreMedicina})
	const indicacionesMedic =medicinas.map((item) => {return item.indicaciones})
	if (MedicamentoReceta) {
		return res.json({
			cantidadMedic,
			nombreMedic,
			indicacionesMedic
		});
	}
}

const MostrarMedicinas = async (req, res) => {
    const medicinas = await MedicamentoReceta.find()

    return res.json(medicinas)
}

const EliminarMedicamentoPorIdReceta = async (req, res) => {
    const idReceta = req.params.id
	const medicamentosReceta = await MedicamentoReceta.find({id_Receta: idReceta});
	medicamentosReceta.map(async(medicamento) => await MedicamentoReceta.findByIdAndDelete(medicamento._id))

	if(medicamentosReceta){
        return res.json({
            ok: true,
            msg: 'Medicamentos eliminados'
        })
    }
}

export {
	CrearMedicamentoReceta,
	ActualizarMedicamentoReceta,
	EliminarMedicamentoReceta,
	MostrarNombreMedicina,
	MostrarMedicinas,
	EliminarMedicamentoPorIdReceta
}