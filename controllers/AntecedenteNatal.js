const AntecedenteNatal = require('../models/AntecedenteNatal');

const CrearAntecedenteNatal = async (req, res) => {
        const {peso_al_macer, talla_al_nacer, tipoDeParto, lugarDeParto, apgar, perimetroCefalico} = req.body;
        try {
            // let paciente = await Paciente.findOne({ dni_paciente });
            // if (paciente) {
            //     return res.status(400).json({
            //         ok: false,
            //         msg: 'Ya existe un paciente con este DNI',
            //     });
            // }
            
			const idPaciente = await AntecedenteNatal.find({id_Paciente});
            if (!idPaciente) {
              return res.status(400).json({
                ok: false,
                msg: 'Paciente no existe con ese id',
              });
            }

            antecedenteNatal = new AntecedenteNatal(req.body);
    
            await antecedenteNatal.save();
            
            res.status(201).json({
                ok: true,
                antecedenteNatal: antecedenteNatal
            });
        } catch (error) {
            console.log('Error: ' + error.toString());
            res.status(500).json({
                ok: false,
                msg: 'Por favor hable con el administrador',
            });
        }
 };

 const ActualizarAntecedenteNatal = async (req, res = response) => {
	const antecedenteNatalId = req.params.id;
	const idPaciente = req.id_Paciente;
	try {
		const antecedenteNatal = await AntecedenteNatal.findById(antecedenteNatalId);
		if (!antecedenteNatal) {
			res.status(404).json({
				ok: false,
				msg: 'Antecedente Natal no existe con ese id',
			});
		}
		if (antecedenteNatal.id_Paciente.toString() !== idPaciente) {
			return res.status(401).json({
				ok: false,
				msg: 'No tiene privilegio de editar este Paciente',
			});
		}

		const nuevoAntecedenteNatal= {
			...req.body,
			id_Paciente: idPaciente,
		};
		const antecedenteNatal_Actualizado = await AntecedenteNatal.findByIdAndUpdate(
			antecedenteNatalId,
			nuevoAntecedenteNatal,
			{
				new: true,
			}
		);
		res.json({
			ok: true,
			antecedenteNatal: antecedenteNatal_Actualizado,
		});
	} catch (e) {
		console.log(e);
		res.status(500).json({
			ok: false,
			msg: 'Hable con el administrador',
		});
	}
};

const MostrarAntecedenteNatal = async (req, res) => {
    const antecedenteNatal = await AntecedenteNatal.find();
    return res.json(antecedenteNatal);
}
    
module.exports = {
	CrearAntecedenteNatal,
    ActualizarAntecedenteNatal,
    MostrarAntecedenteNatal
}