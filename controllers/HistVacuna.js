import HistVacuna from '../models/HistVacuna.js';
import Historia from '../models/Historia.js';

const CrearHistVacuna = async (req, res) => {
        const { fecha, id_Historia } = req.body;
        try {
            const idHistoria = await Historia.findOne({id_Historia});
            if (!idHistoria) {
                res.status(404).json({
                    ok: false,
                    msg: 'Historis no existe con ese id',
                });
            }

            histVacuna = new HistVacuna(req.body);

            // if (histClinica.id_Paciente.toString() !== id_Paciente) {
			// 	return res.status(401).json({
			// 		ok: false,
			// 		msg: 'No tiene privilegio de crear este Paciente',
			// 	});
			// }
            
    
            await histVacuna.save();
            
            res.status(201).json({
                ok: true,
                histVacuna: histVacuna,
            });
        } catch (error) {
            console.log('Error: ' + error.toString());
            res.status(500).json({
                ok: false,
                msg: 'Por favor hable con el administrador',
            });
        }
 };

 const ActualizarHistVacuna = async (req, res = response) => {
	const HistVacunaId = req.params.id;
	const {id_Historia} = req.body;
	const idHistoria = id_Historia;
	try {
		const histVacuna = await HistVacuna.findById(HistVacunaId);
		if (!histVacuna) {
			res.status(404).json({
				ok: false,
				msg: 'Vacuna no existe con ese id',
			});
		}
		
    	if (histVacuna.id_Historia.toString() !== idHistoria) {
			return res.status(401).json({
				ok: false,
				msg: 'No tiene privilegio de editar este Paciente',
			});
		}
   
		const nuevaHistVacuna= {
			...req.body,
			id_Historia: idHistoria
		};

		const HistVacuna_Actualizado = await HistVacuna.findByIdAndUpdate(
			HistVacunaId,
			nuevaHistVacuna,
			{
				new: true,
			}
		);
		res.json({
			ok: true,
			HistVacuna: HistVacuna_Actualizado,
		});
	} catch (e) {
		console.log(e);
		res.status(500).json({
			ok: false,
			msg: 'Hable con el administrador',
		});
	}
};

const MostrarHistVacuna = async (req, res) => {
    const histVacuna = await HistVacuna.find();
    return res.json(histVacuna);
}
    
export {
	CrearHistVacuna,
  ActualizarHistVacuna,
  MostrarHistVacuna
}