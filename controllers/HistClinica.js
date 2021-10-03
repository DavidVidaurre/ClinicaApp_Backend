const HistClinica = require('../models/HistClinica');
const {validarEnfermedadActual} = require('../functions/validaciones.js');
const {validarDiagnostico} = require('../functions/validaciones.js');

const CrearHistClinica = async (req, res) => {
        const {fecha, hora, enfermedadActual, diagnostico, id_Paciente, id_ExamenFisico} = req.body;
		try {
            const ENFERMEDADACTUALvalido = await validarEnfermedadActual(enfermedadActual);
            if(!ENFERMEDADACTUALvalido){
              return res.status(400).json({
                ok: false,
                msg: 'Excedió el limite de caracteres en Enfermedad Actual',
              });
            }
            const DIAGNOSTICOvalido = await validarDiagnostico(diagnostico);
            if(!DIAGNOSTICOvalido){
              return res.status(400).json({
                ok: false,
                msg: 'Excedió el limite de caracteres em Diagnostico incorrecto',
              });
            }
			
			histClinica = new HistClinica(req.body);

			if (histClinica.id_Paciente.toString() !== id_Paciente) {
				return res.status(401).json({
					ok: false,
					msg: 'No tiene privilegio de crear este Paciente',
				});
			}
    
            await histClinica.save();
             
            res.status(201).json({
                ok: true,
                histClinica: histClinica,
            });
        } catch (error) {
            console.log('Error: ' + error.toString());
            res.status(500).json({
                ok: false,
                msg: 'Por favor hable con el administrador',
            });
        }
 };

const ActualizarHistClinica = async (req, res = response) => {
	const histClinicaId = req.params.id;
	const idPaciente = req.id_Paciente;
	try {
		const histClinica = await Evento.findById(histClinicaId);
		if (!histClinica) {
			res.status(404).json({
				ok: false,
				msg: 'Historia Clinica no existe con ese id',
			});
		}
		if (histClinica.id_Paciente.toString() !== idPaciente) {
			return res.status(401).json({
				ok: false,
				msg: 'No tiene privilegio de editar este Paciente',
			});
		}
		const nuevaHistClinica = {
			...req.body,
			id_Paciente: idPaciente
		};

		const histClinicaActualizado = await HistClinica.findByIdAndUpdate(
			histClinicaId,
			nuevaHistClinica,
			{
				new: true,
			}
		);
		res.json({
			ok: true,
			histClinica: histClinicaActualizado,
		});
	} catch (e) {
		console.log(e);
		res.status(500).json({
			ok: false,
			msg: 'Hable con el administrador',
		});
	}
};



const MostrarHistClinica = async (req, res) => {
    const histClinica = await HistClinica.find();
    return res.json(histClinica);
}

module.exports = {
	CrearHistClinica,
	ActualizarHistClinica,
	MostrarHistClinica
 
}