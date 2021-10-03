const Vacuna = require('../models/Vacuna');

const CrearVacuna = async (req, res) => {
        const { nombre_vacuna, previene, dosis } = req.body;
        try {
            let vacuna = await Vacuna.findOne({ nombre_vacuna });
            if (vacuna) {
                return res.status(400).json({
                    ok: false,
                    msg: 'Ya existe una vacuna con este nombre',
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
	try {
		const vacuna = await Vacuna.findById(vacunaId);
		if (!vacuna) {
			res.status(404).json({
				ok: false,
				msg: 'Vacuna no existe con ese id',
			});
		}

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
			evento: vacuna_Actualizado,
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
    
module.exports = {
	CrearVacuna,
  ActualizarVacuna,
  MostrarVacuna
}