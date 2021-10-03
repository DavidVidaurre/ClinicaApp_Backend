const Paciente = require('../models/Paciente');
const {validarDNI} = require('../functions/validaciones.js');
const {validarNombre} = require('../functions/validaciones.js');

const CrearPaciente = async (req, res) => {
        const {dni_paciente, nombres_paciente, aPaterno, aMaterno,fecha_nac, lugar_nac, estado, id_AntecedenteNatal } = req.body;
        try {
            let paciente = await Paciente.findOne({ dni_paciente });
            if (paciente) {
                return res.status(400).json({
                    ok: false,
                    msg: 'Ya existe un paciente con este DNI',
                });
            }
            
            const DNIvalido = await validarDNI(dni_paciente);
            if(!DNIvalido){
              return res.status(400).json({
                ok: false,
                msg: 'DNI incorrecto',
              });
            }
            const NOMBREvalido = await validarNombre(nombres_paciente);
            if(!NOMBREvalido){
              return res.status(400).json({
                ok: false,
                msg: 'Nombre incorrecto',
              });
            }
            const APATERNOvalido = await validarNombre(aPaterno);
            if(!APATERNOvalido){
              return res.status(400).json({
                ok: false,
                msg: 'Apellido Paterno incorrecto',
              });
            }
            const AMATERNOvalido = await validarNombre(aMaterno);
            if(!AMATERNOvalido){
              return res.status(400).json({
                ok: false,
                msg: 'Apellido Materno incorrecto',
              });
            }

            const LUGARNACvalido = await validarNombre(lugar_nac);
            if(!LUGARNACvalido){
              return res.status(400).json({
                ok: false,
                msg: 'Apellido Materno incorrecto',
              });
            }

            paciente = new Paciente(req.body);
            
            await paciente.save();
            
            res.status(201).json({
                ok: true,
                paciente: paciente,
            });
        } catch (error) {
            console.log('Error: ' + error.toString());
            res.status(500).json({
                ok: false,
                msg: 'Por favor hable con el administrador',
            });
        }
 };

const ActualizarPaciente = async (req, res = response) => {
	const pacienteId = req.params.id;
	try {
		const paciente = await Vacuna.findById(pacienteId);
		if (!paciente) {
			res.status(404).json({
				ok: false,
				msg: 'Paciente no existe con ese id',
			});
		}

		const nuevoPaciente= {
			...req.body,
		};

		const paciente_Actualizado = await Paciente.findByIdAndUpdate(
			pacienteId,
			nuevoPaciente,
			{
				new: true,
			}
		);
		res.json({
			ok: true,
			evento: paciente_Actualizado,
		});
	} catch (e) {
		console.log(e);
		res.status(500).json({
			ok: false,
			msg: 'Hable con el administrador',
		});
	}
};


const MostrarPaciente = async (req, res) => {
    const paciente = await Paciente.find();
    return res.json(paciente);
}
    
module.exports = {
	CrearPaciente,
  ActualizarPaciente,
	MostrarPaciente
}