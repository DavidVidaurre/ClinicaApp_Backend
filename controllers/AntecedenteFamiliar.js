const AntecedenteFamiliar = require('../models/AntecedenteFamiliar');
const Historia = require('../models/Historia')

const CrearAntecedenteFamiliar = async (req, res) => {
        const {asmaBronquial, diabetes, epilepsia, otros, id_Historia} = req.body;
        try {
            
            const idHistoria = await Historia.findOne({_id:id_Historia});
            if (!idHistoria) {
                return res.status(404).json({
                    ok: false,
                    msg: 'Paciente no existe con ese id',
                });
            }
			

            antecedenteFamiliar = new AntecedenteFamiliar(req.body);
            
    
            await antecedenteFamiliar.save();
            
            res.status(201).json({
                ok: true,
                antecedenteFamiliar: antecedenteFamiliar
            });
        } catch (error) {
            console.log('Error: ' + error.toString());
            res.status(500).json({
                ok: false,
                msg: 'Por favor hable con el administrador',
            });
        }
 };

 const ActualizarAntecedenteFamiliar = async (req, res = response) => {
	const antecedenteFamiliarId = req.params.id;
	const {id_Historia} = req.body;
	const idHistoria = id_Historia;
	try {
		const antecedenteFamiliar = await AntecedenteFamiliar.findById(antecedenteFamiliarId);
		if (!antecedenteFamiliar) {
			return res.status(404).json({
				ok: false,
				msg: 'Antecedente Patologico no existe con ese id',
			});
		}
		if (AntecedenteFamiliar.id_Historia.toString() !== idHistoria) {
			return res.status(401).json({
				ok: false,
				msg: 'No tiene privilegio de editar esta Historia',
			});
		}
		const nuevoAntecedenteFamiliar= {
			...req.body,
			id_Historia: idHistoria
		};
		const antecedenteFamiliar_Actualizado = await AntecedenteFamiliar_Actualizado.findByIdAndUpdate(
			antecedenteFamiliarId,
			nuevoAntecedenteFamiliar,
			{
				new: true,
			}
		);
		res.json({
			ok: true,
			antecedenteFamiliar: antecedenteFamiliar_Actualizado,
		});
	} catch (e) {
		console.log(e);
		res.status(500).json({
			ok: false,
			msg: 'Hable con el administrador',
		});
	}
};

const MostrarAntecedenteFamiliar = async (req, res) => {
    const antecedenteFamiliar = await AntecedenteFamiliar.find();
    return res.json(antecedenteFamiliar);
}
    
module.exports = {
	CrearAntecedenteFamiliar,
    ActualizarAntecedenteFamiliar,
    MostrarAntecedenteFamiliar
}