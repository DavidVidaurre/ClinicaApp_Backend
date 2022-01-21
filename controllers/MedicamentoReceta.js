const MedicamentoReceta = require('../models/MedicamentoReceta');
const Receta = require('../models/Receta')

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

module.exports = {
	CrearMedicamentoReceta,
	ActualizarMedicamentoReceta,
	EliminarMedicamentoReceta
}