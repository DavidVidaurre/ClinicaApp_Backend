const CitaCVacuna = require('../models/CitaVacuna');

const CrearCitaVacuna = async (req, res) => {
        const { fecha, atendido, cancelado, id_Paciente, id_Vacuna } = req.body;
        try {
            let fechaVacuna = await CitaConsulta.findOne({ fecha });
            if (fechaVacuna) {
                return res.status(400).json({
                    ok: false,
                    msg: 'Ya existe una cita para vacuna a esa hora',
                });
            }
            citaVacuna = new CitaVacuna(req.body);

            // if (histClinica.id_Paciente.toString() !== id_Paciente) {
			// 	return res.status(401).json({
			// 		ok: false,
			// 		msg: 'No tiene privilegio de crear este Paciente',
			// 	});
			// }
            const idPaciente = await CitaConsulta.find(id_Paciente);
            if (!idPaciente) {
                res.status(404).json({
                    ok: false,
                    msg: 'Paciente no existe con ese id',
                });
            }

            const idVacuna = await CitaVacuna.find(id_Vacuna);
            if (!idVacuna) {
                res.status(404).json({
                    ok: false,
                    msg: 'Vacuna no existe con ese id',
                });
            }
    
            await citaVacuna .save();
            
            res.status(201).json({
                ok: true,
                citaVacuna: citaVacuna,
            });
        } catch (error) {
            console.log('Error: ' + error.toString());
            res.status(500).json({
                ok: false,
                msg: 'Por favor hable con el administrador',
            });
        }
 };

 const ActualizarCitaVacuna = async (req, res = response) => {
	const citaVacunaId = req.params.id;
	const idPaciente = req.id_Paciente;
  const idVacuna = req.id_Vacuna;
	try {
		const citaVacuna = await CitaVacuna.findById(citaVacunaId);
		if (!citaVacuna) {
			res.status(404).json({
				ok: false,
				msg: 'Cita para Vacuna no existe con ese id',
			});
		}
		
    if (citaVacuna.id_Paciente.toString() !== idPaciente) {
			return res.status(401).json({
				ok: false,
				msg: 'No tiene privilegio de editar este Paciente',
			});
		}
    if (citaVacuna.id_Vacuna.toString() !== idVacuna) {
			return res.status(401).json({
				ok: false,
				msg: 'No tiene privilegio de editar esta Vacuna',
			});
		}
		const nuevaCitaVacuna= {
			...req.body,
			id_Paciente: idPaciente,
      id_Vacuna: idVacuna,
		};

		const citaVacuna_Actualizado = await CitaVacuna.findByIdAndUpdate(
			citaVacunaId,
			nuevaCitaVacuna,
			{
				new: true,
			}
		);
		res.json({
			ok: true,
			citaVacuna: citaVacuna_Actualizado,
		});
	} catch (e) {
		console.log(e);
		res.status(500).json({
			ok: false,
			msg: 'Hable con el administrador',
		});
	}
};

const MostrarCitaVacuna = async (req, res) => {
    const citaVacuna = await CitaVacuna.find();
    return res.json(citaVacuna);
}
    
module.exports = {
	CrearCitaVacuna,
  ActualizarCitaVacuna,
  MostrarCitaVacuna
}