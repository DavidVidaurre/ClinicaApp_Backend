const HistClinica = require('../models/HistClinica');
const Historia =  require('../models/Historia');
const {validarDiagnostico} = require('../functions/validaciones.js');

const CrearHistClinica = async (req, res) => {
        const {fecha, diagnostico, tratamiento, examenesAuxiliares, id_Historia} = req.body;
		try {
            // const DIAGNOSTICOvalido = await validarDiagnostico(diagnostico);
            // if(!DIAGNOSTICOvalido){
            //   return res.status(400).json({
            //     ok: false,
            //     msg: 'Excedió el limite de caracteres em Diagnostico incorrecto',
            //   });
            // }
			const idHistoria = await Historia.findOne({ _id: id_Historia });
			if (!idHistoria) {
				return res.status(404).json({
					ok: false,
					msg: 'Paciente no existe con ese id',
				});
			}

			
			histClinica = new HistClinica(req.body);

    
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
	const {id_Historia} = req.body;
	const idHistoria = id_Historia;
	try {
		const histClinica = await HistClinica.findById(histClinicaId);
		if (!histClinica) {
			res.status(404).json({
				ok: false,
				msg: 'Historia Clinica no existe con ese id',
			});
		}
		if (histClinica.id_Historia.toString() !== idHistoria) {
			return res.status(401).json({
				ok: false,
				msg: 'No tiene privilegio de editar este Paciente',
			});
		}
		const nuevaHistClinica = {
			...req.body,
			id_Historia: idHistoria
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