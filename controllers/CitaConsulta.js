const CitaConsulta = require('../models/CitaConsulta');

const CrearCitaConsulta = async (req, res) => {
        const { fecha, atendido, cancelado, id_Paciente } = req.body;
        try {
            let fechaConsulta = await CitaConsulta.findOne({ fecha });
            if (fechaConsulta) {
                return res.status(400).json({
                    ok: false,
                    msg: 'Ya existe una cita para consulta a esa hora',
                });
            }
            citaConsulta = new CitaConsulta(req.body);

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
    
            await citaConsulta.save();
            
            res.status(201).json({
                ok: true,
                citaConsulta: citaConsulta,
            });
        } catch (error) {
            console.log('Error: ' + error.toString());
            res.status(500).json({
                ok: false,
                msg: 'Por favor hable con el administrador',
            });
        }
 };

 const ActualizarCitaConsulta = async (req, res = response) => {
	const citaConsultaId = req.params.id;
	const idPaciente = req.id_Paciente;
	try {
		const citaConsulta = await CitaConsulta.findById(citaConsultaId);
		if (!citaConsulta) {
			res.status(404).json({
				ok: false,
				msg: 'Cita para Consulta no existe con ese id',
			});
		}
		if (citaConsulta.id_Paciente.toString() !== idPaciente) {
			return res.status(401).json({
				ok: false,
				msg: 'No tiene privilegio de editar este Paciente',
			});
		}
		const nuevaCitaConsulta= {
			...req.body,
			id_Paciente: idPaciente,
		};

		const citaConsultaActualizado = await CitaConsulta.findByIdAndUpdate(
			citaConsultaId,
			nuevaCitaConsulta,
			{
				new: true,
			}
		);
		res.json({
			ok: true,
			citaConsulta: citaConsultaActualizado,
		});
	} catch (e) {
		console.log(e);
		res.status(500).json({
			ok: false,
			msg: 'Hable con el administrador',
		});
	}
};

const MostrarCitaConsulta = async (req, res) => {
    const citaConsulta = await CitaConsulta.find();
    return res.json(citaConsulta);
}
    
module.exports = {
	CrearCitaConsulta,
    ActualizarCitaConsulta,
    MostrarCitaConsulta
}