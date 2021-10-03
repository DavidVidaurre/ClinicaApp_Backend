const AntecedentePatologico = require('../models/AntecedentePatologico');

const CrearAntecedentePatologico = async (req, res) => {
        const {nombre, descripcion, id_HistClinica} = req.body;
        try {
            
            const idHistClinica = await AntecedentePatologico.find(id_HistClinica);
            if (!idHistClinica) {
                res.status(404).json({
                    ok: false,
                    msg: 'Historis Clinica no existe con ese id',
                });
            }

            antecedentePatologico = new AntecedentePatologico(req.body);
            
    
            await antecedentePatologico.save();
            
            res.status(201).json({
                ok: true,
                antecedentePatologico: antecedentePatologico
            });
        } catch (error) {
            console.log('Error: ' + error.toString());
            res.status(500).json({
                ok: false,
                msg: 'Por favor hable con el administrador',
            });
        }
 };

 const ActualizarAntecedentePatologico = async (req, res = response) => {
	const antecedentePatologicoId = req.params.id;
	const idHistClinica = req.id_HistClinica;
	try {
		const antecedentePatologico = await AntecedentePatologico.findById(antecedentePatologicoId);
		if (!antecedentePatologico) {
			res.status(404).json({
				ok: false,
				msg: 'Antecedente Patologico no existe con ese id',
			});
		}
		if (antecedentePatologico.id_HistClinica.toString() !== idHistClinica) {
			return res.status(401).json({
				ok: false,
				msg: 'No tiene privilegio de editar esta Historia Medica',
			});
		}
		const nuevoAntecedentePatologico= {
			...req.body,
			id_HistClinica: idHistClinica
		};
		const antecedentePatologico_Actualizado = await AntecedenteNatal.findByIdAndUpdate(
			antecedentePatologicoId,
			nuevoAntecedentePatologico,
			{
				new: true,
			}
		);
		res.json({
			ok: true,
			antecedentePatologico: antecedentePatologico_Actualizado,
		});
	} catch (e) {
		console.log(e);
		res.status(500).json({
			ok: false,
			msg: 'Hable con el administrador',
		});
	}
};

const MostrarAntecedentePatologico = async (req, res) => {
    const antecedentePatologico = await AntecedentePatologico.find();
    return res.json(antecedentePatologico);
}
    
module.exports = {
	CrearAntecedentePatologico,
    ActualizarAntecedentePatologico,
    MostrarAntecedentePatologico
}