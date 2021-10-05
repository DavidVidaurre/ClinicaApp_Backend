const AntecedentePatologico = require('../models/AntecedentePatologico');
const Historia = require('../models/Historia');

const CrearAntecedentePatologico = async (req, res) => {
        const {asmaBronquial, nebulizacion, intervencionQuirurgica,reaccionAdversaMed,enfAnteriores, id_Historia} = req.body;
        try {
            
            const idHistoria = await Historia.findOne({_id:id_Historia});
            if (!idHistoria) {
                return res.status(404).json({
                    ok: false,
                    msg: 'Historia no existe con ese id',
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
	const idHistoria = req.id_Historia;
	try {
		const antecedentePatologico = await AntecedentePatologico.findById(antecedentePatologicoId);
		if (!antecedentePatologico) {
			return res.status(404).json({
				ok: false,
				msg: 'Antecedente Patologico no existe con ese id',
			});
		}
		if (antecedentePatologico.id_Historia.toString() != idHistoria) {
			return res.status(401).json({
				ok: false,
				msg: 'No tiene privilegio de editar esta Historia',
			});
		}
		const nuevoAntecedentePatologico= {
			...req.body,
			id_Historia: idHistoria
		};
		const antecedentePatologico_Actualizado = await AntecedentePatologico.findByIdAndUpdate(
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