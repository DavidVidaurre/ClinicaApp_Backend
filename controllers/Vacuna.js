const Vacuna = require('../models/Vacuna');
const HistVacuna = require('../models/HistVacuna');

const CrearVacuna = async (req, res) => {
        const { nombre_vacuna, previene, dosis, id_HistVacuna } = req.body;
        try {
            // let vacuna = await Vacuna.findOne({ nombre_vacuna });
            // if (vacuna) {
            //     return res.status(400).json({
            //         ok: false,
            //         msg: 'Ya existe una vacuna con este nombre',
            //     });
            // }

            const idHistVacuna = await HistVacuna.findOne({id_HistVacuna});
            if (!idHistVacuna) {
                res.status(404).json({
                    ok: false,
                    msg: 'Historia Vacuna no existe con ese id',
                });
            }
            
            vacuna = new Vacuna(req.body);
            
    
            await vacuna.save();
            
            res.status(201).json({
                ok: true,
                vacuna: vacuna,
            });
        } catch (error) {
            console.log('Error: ' + error.toString());
            res.status(500).json({
                ok: false,
                msg: 'Por favor hable con el administrador',
            });
        }
 };

const ActualizarVacuna = async (req, res = response) => {
	const vacunaId = req.params.id;
	// const {id_HistVacuna} = req.body;
	// const idHistVacuna = id_HistVacuna;
	try {
		const vacuna = await Vacuna.findById(vacunaId);
		if (!vacuna) {
			res.status(404).json({
				ok: false,
				msg: 'Vacuna no existe con ese id',
			});
		}
		// if (vacuna.id_HistVacuna.toString() !== idHistVacuna) {
		// 	return res.status(401).json({
		// 		ok: false,
		// 		msg: 'No tiene privilegio de editar este Paciente',
		// 	});
		// }
		const nuevaVacuna= {
			...req.body,
		};

		const vacuna_Actualizado = await Vacuna.findByIdAndUpdate(
			vacunaId,
			nuevaVacuna,
			{
				new: true,
			}
		);
		res.json({
			ok: true,
			vacuna: vacuna_Actualizado,
		});
	} catch (e) {
		console.log(e);
		res.status(500).json({
			ok: false,
			msg: 'Hable con el administrador',
		});
	}
};

const MostrarVacuna = async (req, res) => {
    const vacuna = await Vacuna.find();
    return res.json(vacuna);
}
const VacunaId = async (req,res)=>{
	const v = await Vacuna.find({ id_HistVacuna: req.params.id})
	return res.json(v)
}
module.exports = {
	CrearVacuna,
  ActualizarVacuna,
  MostrarVacuna,
  VacunaId
}