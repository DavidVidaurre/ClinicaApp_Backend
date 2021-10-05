const AntecedenteNatal = require('../models/AntecedenteNatal');
const Historia = require('../models/Historia');

const CrearAntecedenteNatal = async (req, res) => {
        const {peso_al_macer, tipoDeParto, lugarDeParto, apgar1, apgar5, edadGestacional, complicaciones, id_Historia} = req.body;
        try {
            // let paciente = await Paciente.findOne({ dni_paciente });
            // if (paciente) {
            //     return res.status(400).json({
            //         ok: false,
            //         msg: 'Ya existe un paciente con este DNI',
            //     });
            // }
            
			const idHistoria = await Historia.findOne({_id:id_Historia});
            if (!idHistoria) {
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
	const idHistoria = req.id_Historia;
	try {
		const antecedenteNatal = await AntecedenteNatal.findById(antecedenteNatalId);
		if (!antecedenteNatal) {
			res.status(404).json({
				ok: false,
				msg: 'Antecedente Natal no existe con ese id',
			});
		}
		if (antecedenteNatal.id_Historia.toString() !== idHistoria) {
			return res.status(401).json({
				ok: false,
				msg: 'No tiene privilegio de editar este Paciente',
			});
		}

		const nuevoAntecedenteNatal= {
			...req.body,
			id_Historia: idHistoria,
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